
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)


let descHeadline = document.createElement('h3');
descHeadline.innerText = 'Description:';
dogDetails.append(descHeadline)

let descParagraph = document.createElement('p');
descParagraph.innerText = "This Gentle Dog is allof toward her owner"
+ "and never comes when called."
+ "she always acts as though any stranger she meets will"
+ "harm her, and dislikes other animals.";
dogDetails.append(descParagraph);

let feedingTimesHeadline = document.createElement('h3');
feedingTimesHeadline.innerText = 'Feeding Times:';
dogDetails.append(feedingTimesHeadline);

let times = document.createElement('ul');
let time1 = document.createElement('li');
time1.innerText = '9:00 am';
times.append(time1);

let time2 = document.createElement('li');
time2.innerText = '12:00 pm';
times.append(time2);

let time3 = document.createElement('li');
time3.innerText = '5:00 pm';
times.append(time3);

dogDetails.append(times);