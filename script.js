function indexOfIgnoreCase(s1, s2) {
  if (!s2) return 0; // If subStr is empty, return 0 (standard JS behavior)
  if (!s1) return -1; // If main string is empty, can't find anything

  // Convert both strings to lowercase for case-insensitive comparison
  const lowerS1 = s1.toLowerCase();
  const lowerS2 = s2.toLowerCase();

  return lowerS1.indexOf(lowerS2);
}

// Please do not change the code below
const s1 = prompt("Enter s1:") || "";
const s2 = prompt("Enter s2:") || "";
alert(indexOfIgnoreCase(s1, s2));
