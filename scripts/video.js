// get time
function getTimeString(time) {
  const hour = parseInt(time / 3600);
  const remainingSecond = time % 3600;
  const minute = parseInt(remainingSecond / 60);
  return `${hour}hrs ${minute} min ago`;
}

// 1 - Fetch, Load and Show Categories on html

// Create loadCategories
const loadCategories = () => {
  // fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

// Create loadVideos
const loadVideos = () => {
  // fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
};

// const cardDemo = {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }
// create display videos
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");

  // add videos in html
  videos.forEach((video) => {
    console.log(video);

    // creating video card
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `<figure class = "h-[200px] relative">
    <img
      src= ${video.thumbnail}
      class = "h-full w-full object-fit" />
      ${
        video.others.posted_date?.length == 0
          ? ""
          : `<span class = "absolute right-2 bottom-2 bg-[#171717] rounded text-white p-1 text-[10px]">${getTimeString(video.others.posted_date)}</span>`
      }
  </figure>
  <div class="px-0 py-2 flex gap-3">
    <div>
    <img class = "w-10 h-10 rounded-full object-cover" src = ${
      video.authors[0].profile_picture
    } />
    </div>
    <div>
    <h2 class = "text-[#171717] font-bold text-base">${video.title}</h2>
    <div class = "flex items-center gap-2">
    <p class = "text-[#171717b3] text-sm">${video.authors[0].profile_name}</p>
    ${
      video.authors[0].verified == true
        ? `<img src = "../assets/verified.png">`
        : " "
    }
    </div>
    <p></p>
    </div>
  </div>`;
    videoContainer.append(card);
  });
};
// Create displayCategories
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");

  // add data in html
  categories.forEach((item) => {
    console.log(item);

    // create a button
    const button = document.createElement("button");
    button.classList =
      "bg-[#25252526] text-[#252525b3] font-medium text-base py-2 px-5 rounded-sm hover:bg-[#FF1F3D] hover:text-white";
    button.innerText = item.category;

    // add button to category container
    categoryContainer.append(button);
  });
};

loadCategories();
loadVideos();
