import React from "react";
import Links from "./links";
import SideBarLapTop from "./sidebarlaptop";
class Hp extends React.Component {
    render() {
        return(
            <div>
                <Links />
                <SideBarLapTop/>
                <h2>HP Laptop 14s</h2>
                <p><li>10th Generation Intel® Core™ i5 processor</li>
                <li>Windows 10 Home Single Language 64 Plus</li>
                    <li>Intel® UHD Graphics</li>
                    <li>8 GB DDR4-2666 SDRAM (1 x 8 GB)</li>
                    <li>Starting at 1.49 kg</li> 
                    </p>

                    <h2>HP Pavilion x360</h2>   
                <p>
                    <li>10th Generation Intel® Core™ i7 processor</li>
                    <li>Windows 10 Home 64</li>
                    <li>512 GB PCIe® NVMe™ M.2 SSD</li>
                    <li>Intel® UHD Graphics</li>
                    <li>8 GB DDR4-2666 SDRAM (1 x 8 GB)</li>
                    </p>
            </div>
        );
    }
}
export default Hp;