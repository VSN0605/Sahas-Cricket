import React from 'react'
import axios from 'axios';
import  {useState, useEffect} from 'react';
import { useParams , Link} from 'react-router-dom';

export default function Receipt({dbpath}) {
  
    const [user, setUser] = useState([]);
    
    const loadUser = async () => {
        const result = await axios.get(dbpath+'getr.php'); 
        setUser(result.data.phpresult);
        console.log(result.data.phpresult); 
        document.getElementById("iid").innerHTML = result.data.phpresult[0]['id']; 
        document.getElementById("name").innerHTML = result.data.phpresult[0]['name']; 
        document.getElementById("for").innerHTML = result.data.phpresult[0]['for']; 
        document.getElementById("time").innerHTML = result.data.phpresult[0]['time']; 
        document.getElementById("timestamp").innerHTML = result.data.phpresult[0]['timestamp']; 
    }

    useEffect(() => {   
        loadUser();
    }, []);  

    function printDiv() {
        var divContents = document.getElementById("receipt_div").innerHTML;
        var a = window.open('', '', 'height=800, width=800');
        a.document.write('<html>');
        a.document.write('<head>');
        a.document.write('</head>');    
        a.document.write('<body >');
        a.document.write(divContents);
        a.document.write('</body></html>');
        a.document.close();
        a.print();
    }
  return (
    <>

   <br></br><br></br>
   <center><span style={{color:'red'}}>* If the updated receipt does not print, refresh the page</span></center>
      <div id="receipt_div" > 
      <div className='receipt_div shadow-lg mb-5 bg-body-tertiary rounded' style={{border:'solid 1px black', width:'800px', margin:'0 auto'}} >
        <div className='col-12 ' style={{height: '5px', backgroundColor: 'black', width: '100%'}}>
        </div>
        <div className='col-12' style={{height: '10px', backgroundColor: 'rgb(166, 2, 2)', width: '100%'}}>
        </div>
        <center>
          <br></br><br></br>
          <span className=' mt-4' style={{fontFamily: '"Times New Roman", Times, serif'}}>Receipt - <span id='iid'>NA</span></span>
          <h5 className='mt-1'>Achieverse Badminton Club</h5>
        </center>
        <br></br><br></br>    
        <div st >
          <div style={{display:'flex'}}>
            <div style={{marginLeft:'10%'}} >
                <span><b>Name of the student : </b></span> <span id="name">Loading..</span> <br></br>
                <span><b>Time  :</b></span>  <span id="time">5 to 6</span> &nbsp;&nbsp;&nbsp;&nbsp; <span><b>Adm No : </b> ~</span><br></br>
                <span><b>For</b></span> : <span id="for">Badminton Coaching</span>
            </div>

          </div>
        </div>
        <br></br><br></br>
        
          <center>
          <div>
                <table style={{width:'80%', border:"1px solid black"}}> 
                    <thead style={{background: '#414143 none repeat scroll 0 0'}}>
                        <tr>
                            <th style={{color:'#fff', padding:'13px 20px !important'}}>&nbsp;&nbsp;&nbsp;&nbsp;Description</th>
                            <th style={{color:'#fff', padding:'13px 20px !important'}}>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="" style={{padding: '9px 20px !important', fontSize: '13px', fontWeight: 'initial !important'}}>
                            <p>
                                <strong style={{marginLeft:'20px'}}>Prospectus Fee: </strong>
                            </p>
                            <p>
                                <strong style={{marginLeft:'20px'}}>Registration Fee: </strong>
                            </p>
                            <p>
                                <strong style={{marginLeft:'20px'}}>Coaching Fee: </strong>
                            </p>
                            <p>
                                <strong style={{marginLeft:'20px'}}>Maintanence Fee: </strong>
                            </p>
                            <p>
                                <strong style={{marginLeft:'20px'}}>Activiy and Evaluation Fee: </strong>
                            </p>
                            <p>
                                <strong style={{marginLeft:'20px'}}>Uniform Fee: </strong>
                            </p>
                            <p>
                                <strong style={{marginLeft:'20px'}}>Sport Fee: </strong>
                            </p>
                            <p>
                                <strong style={{marginLeft:'20px'}}>Other / Fine: </strong>
                            </p>
                           
                            </td>
                            <td style={{padding: '9px 20px !important', fontSize: '13px', fontWeight: 'initial !important'}}>
                            <p>
                                <strong><i class="fa fa-inr"></i> 100/-</strong>
                            </p>
                            <p>
                                <strong><i class="fa fa-inr"></i> 1000/-</strong>
                            </p>
                            <p>
                                <strong><i class="fa fa-inr"></i> -</strong>
                            </p>
                            <p>
                                <strong><i class="fa fa-inr"></i> -</strong>
                            </p>
                            <p>
                                <strong><i class="fa fa-inr"></i> -</strong>
                            </p>
                            <p>
                                <strong><i class="fa fa-inr"></i> -</strong>
                            </p>
                            <p>
                                <strong><i class="fa fa-inr"></i> -</strong>
                            </p>
                            <p>
                                <strong><i class="fa fa-inr"></i> -</strong>
                            </p>
                            </td>
                        </tr>
                        <tr >
                            <td class="" style={{padding: '9px 20px !important', fontSize: '13px', fontWeight: 'initial !important', marginTop:'120px'}}><h2 style={{fontSize: '20px', fontWeight: "900", margin: '0', textTransform: 'uppercase'}}><strong>&nbsp;&nbsp;&nbsp;Total: </strong></h2></td>
                            <td class="text-left text-danger" style={{	padding: '9px 20px !important', fontSize: '13px', fontWeight: 'initial !important'}}><h2 style={{fontSize: '20px', fontWeight: "900", margin: '0', textTransform: 'uppercase'}}><strong><i class="fa fa-inr"></i> 1100/-</strong></h2></td>
                        </tr>
                    </tbody>
                </table>
                    </div>
                    <div class="row">
                        <div  style={{margin: '10px 0', marginTop:'100px',marginBottom:'30px', overflow: 'hidden', display: 'flex', marginLeft: '120px'}}>
                            <div > 
                                <div class="receipt-right">
                                    <p style={{fontSize: '12px', margin: '0px'}}><b>Date & TIme :</b> <span id="timestamp">15 aug 2022</span></p>
                                    <h5 style={{color: 'rgb(140, 140, 140)', fontSize: '16px', fontWeight:'bold', margin: '0 0 7px 0'}}>Thank you for your enrollment!</h5>
                                </div>
                            </div>
                            <div >
                                <div class="receipt-left">
                                    <h1 style={{fontSize: '15px', fontWeight: '400 !important', margin: '0 !important', marginLeft:'270px', marginTop: '17px'}}>Signature</h1>
                                </div>
                            </div>
                            
                        </div>

                        <div>Comparison of class wise fees structure is not entertained, <br></br> (as fee structure chnages on the badis of grade) </div>
                           
                    </div>
                    </center>
                    <br></br><br></br> 
                    <div className='col-12' style={{height: '7px', backgroundColor: 'black', width: '100%'}}></div>
                 
                    <div style={{borderTop:'2px dashed black', marginTop:'1px'}}>
                        <br></br>
                        <div style={{textAlign:"center"}}>*** For office use only ***</div>
                        <br></br>
                        <div style={{display:'flex'}}>
                            <div className='cl1' style={{paddingLeft:'50px'}}>
                                Admission Fee : Annual/Monthly etc. ___________________________ <br></br>
                                Admission  Date : ___________________________ <br></br>
                                Admission No. : ___________________________ <br></br>
                            </div>   <br></br>  
                            <div className='cl2' style={{paddingLeft:'80px', marginTop:'20px'}}>
                               _________________ <br></br>
                               Authorised Signatory
                            </div>
                          
                        </div>
                        <br></br> <br></br>
                    </div>
           
                </div>    
                
             </div>
        <center><button type="button" class="btn btn-primary" onClick={printDiv}>Print</button> &nbsp; &nbsp; &nbsp;    
            <Link to="/Dashboard"><button type="button" class="btn btn-primary">Dashboard</button> </Link></center>
        <br></br><br></br>
    </>
  )
}