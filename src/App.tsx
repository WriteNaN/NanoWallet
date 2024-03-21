import Create from "./components/Create";
import Layout from "./components/Layout";
import useLocalStorage from "use-local-storage-state";

export default function Wallet() {
  const [masterKey] = useLocalStorage<string | null>("encryptedMasterKey", {
    defaultValue: null
  });

  return (
    <Layout>
      { !masterKey ? <Create /> : <div /> }
    </Layout>
  );
}
