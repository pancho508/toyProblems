var capitals = function (word) {
  const index = []
	 word.split('').filter((e,i,a)=> {
    if(e===e.toUpperCase()){
      index.push(i)
    } 
  })
  return index
};
