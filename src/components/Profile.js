import React,{useState} from 'react'
import './profile.css';
import logo from '../image/logo.jpg'
import { Container,Row, Col } from "react-bootstrap";
import Profiledata from './Profiledata';
import LocationOnIcon from '@material-ui/icons/LocationOn';


function Profile() {
    const [imgPreview,setImgPreview]=useState(null);
    const [error,setError]=useState(false);
    const [imgPreview1,setImgPreview1]=useState(null);
    const [error1,setError1]=useState(false);
    const handleImageChange=(e)=>{
        setError(false);
        const selected=e.target.files[0];
        const ALLOWED_TYPES=["image/png","image/jpeg","image/jpg"];
        if(selected && ALLOWED_TYPES.includes(selected.type)){
            let reader=new FileReader();
            reader.onload=()=>{
                setImgPreview(reader.result);
            };
            reader.readAsDataURL(selected)
        }
        else{
            setError(true);
        }
    }; 
    const handleImageChange1=(e)=>{
        setError1(false);
        const selected1=e.target.files[0];
        const ALLOWED_TYPES1=["image/png","image/jpeg","image/jpg"];
        if(selected1 && ALLOWED_TYPES1.includes(selected1.type)){
            let reader1=new FileReader();
            reader1.onload=()=>{
                setImgPreview1(reader1.result);
            };
            reader1.readAsDataURL(selected1)
        }
        else{
            setError1(true);
        }
    }; 

    
    
    
    
    return (
        <div className="profile-continer">
        <div className="header-logo">
        <img src={logo} id="logo"></img>
        </div>   
        <Container>
        <div className="profile-picturecontainer">
            <div className="profile-coverPicture"
            
            style={{
                background:imgPreview ?`url("${imgPreview}")no-repeat center/cover`:""
            }}
            >
                {error && <p className="errormsg">File not found</p>}
           <div className="coverpic"> 
                 
            <input type="file" id="profile-coverpic"
             
             onChange={handleImageChange} />
             
             </div>
                
         <Col  xs={6} sm={12}md={12} lg={12} className="profile-picture"
         style={{
                background:imgPreview1 ?`url("${imgPreview1}")no-repeat center/cover`:""
            }}
            >
                {error1 && <p className="errormsg">File not found</p>}
            <input type="file" id="profile-coverpic" onChange={handleImageChange1} />
        
        
        
         </Col>
         </div>
         
         <Row className="profile-follower">
             
             <Col xs={12} sm={12}md={12} lg={12}>
             <h3 className="follower-count">17k</h3>
             <p className="follower">Follower</p>
             </Col>
             <Col xs={12} sm={12}md={12} lg={12}>
             <h3 className="following-count">350</h3>
             <p className="following">Following</p>
             
             </Col>
         </Row>
         <Col className="Username-container">
             <h4 className="username">Username</h4>
             <p id="zillionuserid">@username</p>
            </Col>
            <div className="profile-bio">
                <p>xxxxxxxxxxyyyyyyyy  </p>

            </div>
            <div className="profile-locationdate">
               <p><Profiledata  id="sidemenu" Icon={LocationOnIcon}/>City Name Country</p>
               <p  id="joindate" > <Profiledata  Icon={LocationOnIcon}/>Join feb 21</p>
            </div>
           <div className="folower-count">
             <p><img src=""></img>
             Followed by User1,user2 user3
             </p>             
            </div>
            <div className="zdtitle">
                <p id="zdtitle">ZD WALL</p>
            </div>
            <div className="profile-images">
                <Row>
                <Col  xd={7}lg={7} sm={7}>sm=8
                <div className="profile-image1">

                </div>
                </Col>
                  <Col xd={5}lg={5} sm={5}>sm=8
                  <div className="profile-image1"></div>
                  </Col>
                </Row>
            </div>
            <div className="profile-images2">
                <Row>
                <Col  xd={4}lg={4} sm={4}>sm=8
                <div className="profile-image1">

                </div>
                </Col>
                  <Col xd={5}lg={5} sm={5}>sm=8
                  <div className="profile-image1"></div>
                  </Col>
                  <Col xd={3}lg={3} sm={3}>sm=8
                  <div className="profile-image1"></div>
                  </Col>
                </Row>
            </div>
        </div>
        </Container>
        
        </div>
    )
}

export default Profile
