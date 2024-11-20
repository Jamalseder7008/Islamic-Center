import { Authenticator, useTheme } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useEffect, useState } from "react";
import { downloadData, list } from "aws-amplify/storage";
import { FetchUserAttributesOutput, fetchUserAttributes } from "aws-amplify/auth";
import { View, Image } from "@aws-amplify/ui-react";
import logo from "../src/assets/ICLogoOG.png";

const components = {
  Header() {
    const { tokens } = useTheme();
    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image alt="Company Logo" src={logo} />
      </View>
    );
  },
};

function App() {
  const [userAttributes, setUserAttributes] = useState<FetchUserAttributesOutput | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fileList, setFileList] = useState<any[]>([]);
  const [currentPath, setCurrentPath] = useState<string>('');
  const [activeTab, setActiveTab] = useState('download');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  // Fetch user attributes
  const getUserAttributes = async () => {
    try {
      const attributes = await fetchUserAttributes();
      setUserAttributes(attributes);
      console.log("Fetched User Attributes:", attributes);
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to refresh both user attributes and file list
  const refreshContent = async () => {
    setIsLoading(true);
    await getUserAttributes(); // Re-fetch user attributes
    await listFiles(); // Refresh file list
    setIsLoading(false);
  };

  // Initial load of user attributes
  useEffect(() => {
    getUserAttributes();
  }, []);

  useEffect(() => {
    if (activeTab === "download") {
      listFiles(""); // Load files in the initial path
    }
  }, [activeTab]);

  const handleDownload = async (path: string) => {
    try {
      const { body } = await downloadData({ path }).result;
      if (!body) throw new Error('Download body is empty');
      const blob = await body.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = path.split('/').pop() || 'download';
      a.click();
      window.URL.revokeObjectURL(url);

      console.log("File downloaded successfully");
      setDownloadSuccess("File downloaded successfully!");

      setTimeout(() => {
        setDownloadSuccess(null);
      }, 5000);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  const listFiles = async (path = '') => {
    const fullPath = `tax-pdf-submissions/${userAttributes?.sub}/${userAttributes?.given_name}_${userAttributes?.family_name}/${path}`;
    console.log("Full path:", fullPath);

    try {
      const result = await list({ path: fullPath });
      console.log("List result:", result);

      const folderSet = new Set<string>();
      const items = result.items.map(item => {
        const isFolder = item.path.endsWith('/');
        const name = item.path.split('/').filter(Boolean).pop() || '';
        const folderPath = item.path.substring(0, item.path.lastIndexOf('/') + 1);

        if (folderPath && folderPath !== fullPath) {
          folderSet.add(folderPath);
        }

        return {
          name,
          isFolder,
          fullPath: item.path,
        };
      });

      const folderArray = Array.from(folderSet).map(folderPath => ({
        name: folderPath.split('/').filter(Boolean).pop() || '',
        isFolder: true,
        fullPath: folderPath,
      }));

      const files = items.filter(item => !item.isFolder);
      const filteredFolders = folderArray.filter(folder => {
        const folderDepth = (folder.fullPath.replace(fullPath, '').match(/\//g) || []).length;
        return folderDepth === 1;
      });

      const combinedItems = [...filteredFolders, ...files];
      setFileList(combinedItems);
      setCurrentPath(path);
    } catch (error) {
      console.error("Error listing files:", error);
    }
  };

  const renderFileList = () => {
    return (
      <ul>
        {fileList.map((item, index) => (
          <li
            className={`list-boxes ${item.isFolder ? 'folder' : 'file'}`}
            key={index}
            onClick={() => item.isFolder ? navigateToFolder(item.name) : handleDownload(item.fullPath)}
          >
            {item.isFolder ? (
              <span>📁 {item.name}</span>
            ) : (
              <span>📄 {item.name}</span>
            )}
          </li>
        ))}
      </ul>
    );
  };

  const Breadcrumbs = () => {
    const pathParts = currentPath.split('/').filter(part => part);
    return (
      <div className="breadcrumbs">
        {pathParts.map((part, index) => (
          <span key={index}>
            <a onClick={() => listFiles(pathParts.slice(0, index + 1).join('/') + '/')}>
              {part}
            </a>
            {index < pathParts.length - 1 && ' / '}
          </span>
        ))}
      </div>
    );
  };

  const navigateToFolder = (folderName: string) => {
    listFiles(`${currentPath}${folderName}/`);
  };

  const navigateBack = () => {
    const pathParts = currentPath.split('/').filter(part => part);
    pathParts.pop();
    listFiles(pathParts.length > 0 ? pathParts.join('/') + '/' : '');
  };

  return (
    <Authenticator components={components} signUpAttributes={['given_name', 'family_name', 'phone_number']}>
      {({ signOut }) => (
        <main>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {/* Conditional Error Message */}
              <div className="error-message">
                If the page does not load properly, please reload the page and hit refresh.
              </div>

              <div className="tab-container">
                <button
                  className={`tab-button ${activeTab === 'download' ? 'active' : ''}`}
                  onClick={() => setActiveTab('download')}
                >
                  Tax Records
                </button>
                <button
                  className="tab-button"
                  onClick={signOut}>
                  Sign out
                </button>
              </div>

              <h1>Welcome {userAttributes?.given_name} {userAttributes?.family_name}</h1>

              {downloadSuccess && 
                <div className="success-message" color="rgb(194, 168, 81)">
                  {downloadSuccess}
                </div>
              }

              {activeTab === 'download' && (
                <section className="listing-section">
                  <Breadcrumbs />
                  <div className="container">
                    {/* Updated Refresh button to call refreshContent */}
                    <button className="button1" onClick={refreshContent}>
                      Refresh
                    </button>
                    {currentPath && <button className="button2" onClick={navigateBack}>Back</button>}
                  </div>
                  <div>
                    {renderFileList()}
                  </div>
                </section>
              )}
            </>
          )}
        </main>
      )}
    </Authenticator>
  );
}

export default App;
