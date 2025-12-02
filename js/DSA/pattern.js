/**
 * 1. Star Pattern
 *****
 *****
 *****
 *****
 *****
 */
// function pattern1(n) {
//   for (let row = 0; row < n; row++) {
//     let star = "";
//     for (let column = 0; column <= n; column++) {
//       star += "*";
//     }
//     console.log(star);
//   }
// }
// pattern1(5);

/**
 * 2. Star Pattern
 *
 **
 ***
 ****
 *****
 */

// function pattern2(n) {
//   for (let row = 0; row <= n; row++) {
//     let star = "";
//     for (let col = 0; col <= row; col++) {
//       star += "*";
//     }
//     console.log(star);
//   }
// }
// pattern2(5);

/**
 * 3. Star Pattern
 *****
 ****
 ***
 **
 *
 */

// function pattern3(n) {
//   for (let row = 5; row >= 1; row--) {
//     let star = "";
//     for (let col = 1; col <= row; col++) {
//       star += "*";
//     }
//     console.log(star);
//   }
// }
// pattern3(5);

/**
 * 4. Star Pattern
 1
 1 2
 1 2 3
 1 2 3 4
 1 2 3 4 5
 */

// function pattern4(n) {
//   for (let row = 1; row <= n; row++) {
//     let number = "";
//     for (let col = 1; col <= row; col++) {
//       number += col + " ";
//     }
//     console.log(number);
//   }
// }
// pattern4(5);

/**
 * 5. Star Pattern
 *
 **
 ***
 ****
 *****
 ****
 ***
 **
 *
 */

// function pattern5(n) {
//   for (let row = 0; row <= 2 * n; row++) {
//     let rowStar = "*";
//     let totalRow = row > n ? 2 * n - row : row;
//     for (let col = 0; col < totalRow; col++) {
//       rowStar += " * ";
//     }
//     console.log(rowStar);
//   }
// }
// pattern5(5);

/**
 * 6. Star Pattern
 -          *
 -         **
 -        ***
 -       **** 
 -      *****
 */
// function pattern6(n) {
//   for (let row = 0; row <= n; row++) {
//     let rowStar = "";
//     for (let space = 0; space <= n - row; space++) {
//       rowStar += " ";
//     }
//     for (let col = 0; col <= row; col++) {
//       rowStar += "*";
//     }
//     console.log(rowStar);
//   }
// }
// pattern6(5);

/**
 * 7. Star Pattern
 -    * * * * *
 -      * * * *
 -        * * *
 -          * *
 -            *
 */
// function pattern7(n) {
//   for (let row = 0; row <= n; row++) {
//     let rowStar = "";
//     for (let space = 0; space <= row; space++) {
//       rowStar += " ";
//     }
//     for (let col = n - row; col >= 1; col--) {
//       rowStar += "*";
//     }
//     console.log(rowStar);
//   }
// }
// pattern7(5);

/**
 * 8. Star Pattern
 -       *
 -      ***
 -     *****
 -    *******
 -   *********
 */

// function pattern8(n) {
//   for (let row = 0; row <= n; row++) {
//     let rowStar = "";
//     for (let space = 0; space <= n - row; space++) {
//       rowStar += " ";
//     }
//     for (let col = 0; col <= 2 * row; col++) {
//       rowStar += "*";
//     }
//     console.log(rowStar);
//   }
// }
// pattern8(5);

/**
 * 9. Star Pattern
 -   *********
 -    *******
 -     *****
 -      ***
 -       *
 */

// function pattern9(n) {
//   for (let row = 0; row <= n; row++) {
//     let rowStar = "";
//     for (let space = 0; space <= row - 1; space++) {
//       rowStar += " ";
//     }
//     for (let col = 0; col < 2 * (n - row) - 1; col++) {
//       rowStar += "*";
//     }
//     console.log(rowStar);
//   }
// }
// pattern9(5);

/**
 * 10. Star Pattern
 -     *
 -    * *
 -   * * *
 -  * * * *
 - * * * * *
 */

// function pattern10(n) {
//   for (let row = 0; row <= n; row++) {
//     let rowStar = "";
//     for (let space = 0; space <= n - row; space++) {
//       rowStar += " ";
//     }
//     for (let col = 0; col <= row; col++) {
//       rowStar += "* ";
//     }
//     console.log(rowStar);
//   }
// }
// pattern10(5);

/**
 * 11. Star Pattern
 -   * * * * *
 -    * * * *
 -     * * *
 -      * *
 -       *
 */
// function pattern11(n) {
//   for (let row = 0; row <= n; row++) {
//     let rowStar = "";
//     for (let space = 0; space <= row; space++) {
//       rowStar += " ";
//     }
//     for (let col = 0; col <= n - row; col++) {
//       rowStar += " *";
//     }
//     console.log(rowStar);
//   }
// }
// pattern11(5);

/**
 * 12. Star Pattern
  -   * * * * *
  -    * * * *
  -     * * *
  -      * *
  -       *
  -       *
  -      * *
  -     * * *
  -    * * * *
  -   * * * * *
 */
function pattern12(n) {
  // Loop for the upper and lower halves combined
  for (let row = 0; row < 2 * n - 1; row++) {
    let rowStar = "";

    // Calculate the number of spaces
    let spaces = row < n ? row : 2 * n - row - 2;

    // Add spaces for the current row
    for (let space = 0; space < spaces; space++) {
      rowStar += " ";
    }

    // Calculate the number of stars
    let stars = row < n ? 2 * (n - row) - 1 : 2 * (row - n + 1) + 1;

    // Add stars for the current row
    for (let col = 0; col < stars; col++) {
      rowStar += "*";
    }

    // Print the row
    console.log(rowStar);
  }
}

// Test the pattern with size 5
pattern12(5);
