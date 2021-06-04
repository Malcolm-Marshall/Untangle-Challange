const fs = require('fs');

const concordance = (str) => {

  let sentences = [];
  let index = 0;

  for (let j = 0; j < str.length; j++) {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

    if (str[j] === '.' && str[j + 1] && str[j + 2] === str[j + 2].toUpperCase() && str[j + 2] !== '.') {
      sentences.push(str.slice(index, j + 1).toLowerCase().replace(regex, ''));
      index = j + 1;
    } else if (str[j] === '.' && !str[j + 1]) {
      sentences.push(str.slice(index, str.length - 1).toLowerCase().replace(regex, ''))
    }
  }

  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  let strWords = str.toLowerCase().replace(regex, '').split(' ').sort();

  let list = {};

  for (let i = 0; i < strWords.length; i++) {
    if (!list[strWords[i]]) {
      list[strWords[i]] = [[], []];
      list[strWords[i]][0] = 1;
    } else {
      list[strWords[i]][0]++;
    }
  }

  for (let key in list) {
    for (let k = 0; k < sentences.length; k++) {
      if (sentences[k].split(' ').includes(key)) {
        list[key][1].push(k + 1);
      }
    }
  }

  return list;
}



let input1 = ('Given an arbitrary text document written in English, write a program that will generate a concordance i.e. an alphabetical list of all word occurrences, labeled with word frequencies. Bonus: label each word with the sentence numbers in which each occurrence appeared. Adding more.')

let input2 = ('Testing with multiple occurrences in different sentences. Testing. Testing. Occurrences in.')

let input3 = ('Testing with some numbers. 123. 123. 1234.')

let input4 = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet enim ut enim rhoncus, at bibendum magna convallis. Sed ac gravida velit. Donec feugiat metus vel semper fermentum. Pellentesque semper molestie rhoncus. Nunc vehicula aliquam leo. Curabitur lobortis purus enim, non dignissim lacus luctus ac. Quisque auctor vestibulum aliquet. Curabitur venenatis quam lectus, vel fermentum diam ornare vel. Aliquam a eros in nunc bibendum varius sit amet quis velit. In hac habitasse platea dictumst.')


let data1 = concordance(input1);
let data2 = concordance(input2);
let data3 = concordance(input3);
let data4 = concordance(input4);

fs.writeFile("input1.txt", JSON.stringify(data1), (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
  }
});

fs.writeFile("input2.txt", JSON.stringify(data2), (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
  }
});

fs.writeFile("input3.txt", JSON.stringify(data3), (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
  }
});

fs.writeFile("input4.txt", JSON.stringify(data4), (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
  }
});



console.log(concordance(input1));
//console.log(concordance(input2));
//console.log(concordance(input3));
//console.log(concordance(input4));