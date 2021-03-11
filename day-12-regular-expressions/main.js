
let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern,flag)
console.log(regEx) // /love/gi

//RegExpp Object Methods
//test()
const str = 'I love JavaScript'
const pattern2 = /love/
const result = pattern2.test(str) //içnde love geçiyor mu ? true
console.log(result)

//match()

const result2 = str.match(pattern2) //dizi olarak döndürür "love", index: 2, input: "I love JavaScript", groups: undefined
console.log(result2)

//search()
const result3 = str.search(pattern2) //hangi index'de olduğunu yazar  2
console.log(result3) 

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript') //ilk gördüğü python yerine js yazar
console.log(txt)
console.log(matchReplaced)

matchReplaced2 = txt.replace(/Python|python/g, 'JavaScript') //g'yi yazdıktan sonra gördüğü her python yerine js yazar
console.log(txt)
console.log(matchReplaced2)

const txt2 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt2.replace(/%/g,'')
console.log(txt2)
console.log(matches)

//Square Bracket

const pattern3 = '[Aa]pple'
const txt4 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches2 = txt4.match(pattern3)
console.log(matches2);//["Apple", index: 0, input: "Apple and banana are fruits. An old cliche says an…by a banana a day keeps the doctor far far away. ", groups: undefined]

const pattern4 = /[Aa]pple/g
const txt5 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches3 = txt5.match(pattern4)
console.log(matches3); //["Apple", "apple"]

const pattern5 = /[Aa]pple|[Bb]anana/g
const txt6 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches4 = txt6.match(pattern5)
console.log(matches4) //["Apple", "banana", "apple", "banana", "Banana"]

//escape character \
const pattern6 = /\d/g
const txtt = 'This regular expression example was made in January 12,  2020.'
const matches5 = txtt.match(pattern6)
console.log(matches5); //["1", "2", "2", "0", "2", "0"]

//One or more times(+)
const pattern7 = /\d+/g
const txtt1 = 'This regular expression example was made in January 12,  2020.'
const matches6 = txtt1.match(pattern7)
console.log(matches6); //["12", "2020"],

//Period(.)
const pattern8 = /[a].+/g
const txtt2 = 'Apple and banana are fruits'
const matches7 = txtt2.match(pattern8)
console.log(matches7);


//Zero or more times(*)
const pattern9 = /[a].*/g
const txtt3 = 'Apple and banana are fruits'
const matches8 = txtt3.match(pattern9)
console.log(matches8);

//Zero or one times(?)
const txtt4 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const patternn = /[Ee]-?mail/g
matches9 = txtt4.match(txtt4)
console.log(matches9);

//Quantifier in RegExp
const txttt = 'This regular expression example was made in December 6,  2019.'
const patternnn = /\d{4}/g  // exactly four times
const matchesss = txttt.match(patternnn)
console.log(matchesss)  // ['2019']

const txt_1 = 'This regular expression example was made in December 6,  2019.'
const pattern_1 = /^This/ // ^ means starts with
const matches_1 = txt.match(pattern_1)
console.log(matches_1)