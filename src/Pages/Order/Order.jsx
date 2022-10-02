import React from 'react';
import {Table, Dropdown, Button} from 'react-bootstrap';
import dataTrans from '../../dataDummy/testData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHourglassHalf, faCheckCircle, faXmarkCircle, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Order = () => {
  return (
    <div className="the-container">
        <select
            className="text-dark px-2 rounded mt-2 mb-5"
            style={{backgroundColor:"#E7E7E7",
                    height:"30px",
                    width:"120px",
                    border:"none",
                }}
            name="list"
            id="list"
        >
        <option selected> My Offer</option>
        <option>My Order</option>
      </select>
        <Table hover className="the-table">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Vendor</th>
                    <th>Order</th>
                    <th>Start Project</th>
                    <th>End Project</th>
                    <th>Status</th>
                    <th className='dflex text-center'>Action</th>
                </tr>
            </thead>
            <tbody>
                {dataTrans.map((data, index) => {
                    return(
                        <tr>
                            <td>{data.no}</td>
                            <td>{data.users}</td>
                            <td>{data.order}</td>    
                            <td>{data.start}</td>    
                            <td>{data.end}</td>  
                            <td >{data.status}</td>    
                            <td className='dflex text-center'>
                              <Button className='btn4 ms-2 p-0' size="sm">
                                Cancel
                              </Button> 
                              <Button className='btn3 ms-2 p-0' size="sm">
                                Approve
                              </Button> 
                              <Button className='btn5 ms-2 p-0' size="sm" as={Link} to="/send-project">
                                Send Project
                              </Button> 
                              <Button className='btn5 ms-2 p-0' size="sm" as={Link} to="/view-project">
                                View Project
                              </Button>
                              <FontAwesomeIcon icon={faHourglassHalf} style={{ marginLeft: '10px', color: 'gold' }} />
                              <FontAwesomeIcon icon={faCheckCircle} style={{ marginLeft: '10px', color: 'green' }} />
                              <FontAwesomeIcon icon={faXmarkCircle} style={{ marginLeft: '10px', color: 'red' }} />
                            </td>    
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    </div>
  );
}

export default Order;