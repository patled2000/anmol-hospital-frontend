import React, { useState } from 'react';
import Spacing from '../../Spacing';
import TeamStyle2 from '../../Team/TeamStyle2';
import Pagination from '../../Pagination';

export default function TeamSectionStyle2({ data }) {
  const [view, setView] = useState('grid');
  const [active, setActive] = useState('all');
  const [filteredData, setFilteredData] = useState(data);
  // Extracting unique categories from teamData
  const uniqueCategories = [...new Set(data.map(doctor => doctor.category))];
  const handleFilter = category => {
    if (category === 'all') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(doctor => doctor.category === category);
      setFilteredData(filtered);
    }
    setActive(category);
  };

  return (
    <div className="container">
      <div className="cs_doctors_heading">
        <div className="cs_isotop_filter cs_style1">
         {/**  <p className="mb-0">Sort by</p>   */}
          <ul className="cs_mp0">
            <li className={active === 'all' ? 'active' : ''}>
              <span onClick={() => handleFilter('all')}>All</span>
            </li>
            {uniqueCategories?.map(item => (
              <li className={active === item ? 'active' : ''} key={item}>
                <span onClick={() => handleFilter(item)}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="cs_view_box">
         {/**  <span>Showing {filteredData.length} Doctors</span>   */}
          <div className="cs_view_box_in">   
        
          </div>
        </div>
      </div>
      <Spacing md="65" />
      <div className={`cs_team_grid cs_${view}_view_wrap`}>
        {filteredData?.map((item, index) => (
          <TeamStyle2 {...item} key={index} />
        ))}
      </div>
      <Spacing md="50" />
    {/**   <Pagination />   */}
    </div>
  );
}
