import React from "react";
import SectorCard from "../../components/SectorCard/SectorCard";
import styles from "./styles/SectorList.module.scss";
import schemesData from "../../../public/data/sectorcard.json"; // Import JSON data directly

const SectorList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Sector-wise Schemes</h2>
      <div className={styles.grid}>
        {schemesData.schemes.map((scheme, index) => (
          <SectorCard
            key={index}
            icon={scheme.icon}
            title={scheme.title}
            count={scheme.count || "N/A"} // Display "N/A" if count is null
          />
        ))}
      </div>
    </div>
  );
};

export default SectorList;
