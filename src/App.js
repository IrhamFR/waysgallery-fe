import './App.css';
import './Pages/css/style.css'
import Landing from './Pages/Landing/Landing';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import DetailProfile from './Pages/Detail/DetailProfile';
import Layout from './Components/Widget/Layout';
import Upload from './Pages/Upload/Upload';
import DetailUser from './Pages/DetailUser/DetailUser';
import Profile from './Pages/Profile/Profile';
import EditProfile from './Pages/Profile/EditProfile';
import SendProject from './Pages/SendProject/SendProject'
import ViewProject from './Pages/ViewProject/ViewProject'
import HireMe from './Pages/Hire/hire'
import Order from './Pages/Order/Order'

function App() {

  
  return (
    <>
    <Routes>
      <Route path='/' element={<Landing />}/>

      <Route path='/home' element={
      <Layout>
        <Home /> 
      </Layout>}/>

      <Route path='/detail' element={
      <Layout>
        <DetailProfile />
      </Layout>}/>

      <Route path='/upload' element={
        <Layout>
          <Upload />
        </Layout>} />

      <Route path='/detail-user' element={
        <Layout>
          <DetailUser/>
        </Layout>} />

      <Route path='/profile' element={
        <Layout>
          <Profile />
        </Layout>} />

      <Route path='/edit-profile' element={
        <Layout>
          <EditProfile />
        </Layout>} />

        <Route path='/send-project' element={
        <Layout>
          <SendProject />
        </Layout>} />

        <Route path='/view-project' element={
        <Layout>
          <ViewProject />
        </Layout>} />

        <Route path='/hire' element={
        <Layout>
          <HireMe /> 
        </Layout>}/>

        <Route path='/order' element={
        <Layout>
          <Order /> 
        </Layout>}/>

    </Routes>
    
      
    </>
  );
}

export default App;
