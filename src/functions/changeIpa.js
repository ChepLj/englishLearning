
export function rotate(obj) {
  // alert("change ipa")
  const tooltipText = obj?.dataset.originalTitle;
  //-- tao mang Ipa --//
  const rawArrayAll = tooltipText.split(" ");
  const rawArrayAllIpa = rawArrayAll.filter((word) => {
    return word.includes("[") && word.includes("]");
  });
  //-- Loai bo ky tu thua --//
  const finalArrayIpa = rawArrayAllIpa.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue.slice(1, currentValue.indexOf("]")));
  }, []);

  //-- Thay doi Ipa --//
  var oldIpa = obj.innerHTML;
  let indexOfOldIpa = finalArrayIpa.indexOf(oldIpa);
  const lengthOfArray = finalArrayIpa.length - 1;
  var newIpa = oldIpa;
  if (indexOfOldIpa < lengthOfArray) {
    newIpa = finalArrayIpa[indexOfOldIpa + 1];
  } else if (indexOfOldIpa == lengthOfArray) {
    newIpa = finalArrayIpa[0];
  }

  obj.innerHTML = newIpa;
  return false; // return false de loai bo hanh vi mac dinh cua the a
}


