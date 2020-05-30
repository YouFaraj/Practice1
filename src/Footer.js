import React from 'react';
import {Table} from 'reactstrap';

export default function Footer() {
    return (
        <React.Fragment>
            <footer className="fixed-bottom text-center"> 
                <Table borderless>
                    <thead>
                        <tr>
                        <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>3812 Coconut Palm Dr.
                            Suite 100
                            Tampa, FL 33619
                            Phone: 813-621-3250     
                            Fax: 813-621-3331
                    </td></tr>
                    </tbody>
                </Table>
            </footer>
        </React.Fragment>
    )
}
