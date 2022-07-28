module.exports = towelSort = (matrix) =>
    matrix?.length
        ? matrix
              .reduce(
                  (result, array, id) =>
                      id % 2
                          ? [...result, array.reverse()]
                          : [...result, array],
                  []
              )
              .flat()
        : [];

// function towelSort(matrix) {
//     let result = [];
//     if (!matrix?.length) {
//         return [];
//     } else {
//         for (let i = 0; i < matrix.length; i++) {
//             if (i % 2 == 0) {
//                 result.push(matrix[i]);
//             } else {
//                 result.push(matrix[i].reverse());
//             }
//         }
//         return result.flat();
//     }
// };
