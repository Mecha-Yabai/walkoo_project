import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Expertise from '../../components/Expertise/Expertise'
import Technologie from '../../components/Technologie/Technologie'
import Secteurs from '../../components/Secteurs/Secteurs';

const Website = () => (
  <div>
    <Navbar />
    <Expertise/>
    <Technologie/>
    <Secteurs/>
  </div>
)

export default Website;