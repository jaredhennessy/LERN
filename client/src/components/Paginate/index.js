import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Pagination from "@material-ui/lab/Pagination";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

export default function Paginate({ coursesPerPage, totalCourses, paginator }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCourses / coursesPerPage); i++) {
    pageNumbers.push(i);
  }
  // const classes = useStyles();
  return (
    <div>
      {/* <Pagination onChange={() => paginator(pageNumbers.indexOf())}count={pageNumbers.length} color="primary" /> */}
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <a onClick={() => paginator(number)} >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
