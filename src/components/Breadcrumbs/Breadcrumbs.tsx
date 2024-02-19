import React from "react";
import styles from "./Breadcrumbs.module.scss";
import bread from "../../assets/bread.png";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import Link from "next/link";

interface Breadcrumb {
  name?: string;
  url?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbsProps {
  paths: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ paths }) => {
  return (
    <nav aria-label="breadcrumb" className={styles.breadcrumbsContainer}>
      <div className={styles.wholeContainer}>
        <div className={styles.imageContainer}>
          <img src={bread.src} alt="Your Image" />{" "}
        </div>
        <MaxWidthWrapper>
          <ul className={styles.breadcrumbs}>
            {paths.map((path, index) => (
              <React.Fragment key={index}>
                <li
                  className={`${styles.breadcrumbItem} ${
                    index === paths.length - 1 ? styles.active : ""
                  }`}
                >
                  {path.icon && (
                    <span className={styles.icon}>{path.icon}</span>
                  )}
                  {path.url ? (
                    <Link href={path.url}>
                      {" "}
                      <a className={styles.breadcrumbItemLink}>{path.name}</a>
                    </Link>
                  ) : (
                    <span className={styles.breadcrumbItemName}>
                      {path.name}
                    </span>
                  )}
                </li>
                {index < paths.length - 1 && (
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 0.916676L5.08333 5.00001L1 9.08334"
                      stroke="#999999"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </React.Fragment>
            ))}
          </ul>
        </MaxWidthWrapper>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
