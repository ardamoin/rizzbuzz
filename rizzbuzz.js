function rizzbuzz(end_num) {
  for (let i = 1; i <= end_num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(`${i} rizzbuzz <3   HELLA RIZZZ!!!`);
    } else {
      if (i % 3 == 0) {
        console.log(`${i} rizz`);
      } else if (i % 5 == 0) {
        console.log(`${i} buzz`);
      } else {
        console.log(i);
      }
    }
  }
}

rizzbuzz(100);
