const heroDiv = document.getElementById("heroPostDiv");
const articleDiv = document.getElementById("arcticlesDiv");
const viewBtn = document.getElementById("viewMBtnDiv");
const aboutBtn = document.getElementById("aboutBtn");
const homeBtn = document.getElementById("homeBtn");
const recentPostTitle = document.getElementById("recentPostTitle");
const extraPosts = document.getElementById("extraPosts");
var isHome = true;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Hero div event listener
heroDiv.addEventListener("click", function () {
  if (isHome) {
    heroDiv.innerHTML = `
                              <div class="heroPostDivDark">
                                  <div class="heroPostText heroPostTextDark">
                                      <span>JULY 23, 2022</span>
                                      <h1>My new journey as a bootcamp student.</h1>
                                      <p>
                                          After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.
                                      </p>
                                  </div>
                                  <img src="./images/article-image-hero.jpg" class="heroImg">
                                  <div class="heroPostTextDark">
                                      <h3> How I stay committed to learning </h3>
                                      <p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.</p>
                                      <p>While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.</p>
                                      <h3> How I got started </h3>
                                      <p> I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.</p>
                                      <p>That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.</p>
                                  </div>
                              </div>
                          `;

    if (recentPostTitle.classList.contains("hidden")) {
      recentPostTitle.classList.toggle("hidden");
    }

    heroDiv.style.background = "none";
  }
});

// About btn event listener
aboutBtn.addEventListener("click", function () {
  heroDiv.innerHTML = `
                                <div>
                                    <div class="aboutMeTextDark">
                                        <img src="images/image-18.jpg">
                                        <h1>Hi there! My name is Roku and welcome to my learning journal.</h1>
                                        <p>
                                            After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.
                                        </p>
                                    </div>
                                    <div class="heroPostTextDark">
                                                        
                                        <h3> How I stay committed to learning </h3>

                                        <p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.</p>

                                        <p>While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.</p>

                                        <h3> How I got started </h3>

                                        <p> I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.</p>

                                        <p>That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.</p>
                                    </div>
                                </div>
                            `;

  if (recentPostTitle.classList.contains("hidden")) {
    recentPostTitle.classList.toggle("hidden");
  }

  heroDiv.style.background = "none";

  isHome = false;
});

// Home btn event listener
homeBtn.addEventListener("click", function () {
  isHome = true;
  heroDiv.innerHTML = `
                            <div class="heroPostText">
                                <span>JULY 23, 2022</span>
                                <h1>My new journey as a bootcamp student.</h1>
                                <p>
                                    After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.
                                </p>
                            </div>
                        `;

  heroDiv.style.background = 'url("../images/article-image-hero.jpg")';
  heroDiv.style.backgroundSize = "cover";

  if (!recentPostTitle.classList.contains("hidden")) {
    recentPostTitle.classList.toggle("hidden");
  }
});

viewBtn.addEventListener("click", function () {
  if (viewBtn.innerText === "View More") {
    console.log("yes");
    viewBtn.innerHTML = `<button class="viewMBtn">View Less</button>`;
  } else {
    viewBtn.innerHTML = `<button class="viewMBtn">View More</button>`;
  }

  extraPosts.classList.toggle("hidden");
});
