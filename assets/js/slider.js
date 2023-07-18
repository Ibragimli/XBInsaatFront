$(document).ready(function () {
    const projectSlide = $('.projectSlide');
    const projectPrevBtn = $('.prev-project-btn');
    const projectNextBtn = $('.next-project-btn');
    let projectCurrentSlide = 0;
    let projectsSlideInterval;
    let currentVideo;
    let videoEnded = true;

    // İlk slaytı göster
    projectSlide.eq(projectCurrentSlide).css('display', 'block');

    // Otomatik dönme işlemini başlat
    startSlideShow();

    // Slayt gösterisini başlatan fonksiyon
    function startSlideShow() {
        projectsSlideInterval = setInterval(nextSlide, 8000); // Saniyede bir döndürmek için 8000 milisaniye (8 saniye)
    }

    // Slaytı bir sonraki slayta geçiren fonksiyon
    function nextSlide() {
        if (videoEnded) {
            pauseCurrentVideo();
            projectSlide.eq(projectCurrentSlide).css('display', 'none');
            projectCurrentSlide = (projectCurrentSlide + 1) % projectSlide.length;
            projectSlide.eq(projectCurrentSlide).css('display', 'block');
            playCurrentVideo();
        }
    }

    // Önceki slayta geç
    projectPrevBtn.on('click', function () {
        if (videoEnded) {
            pauseCurrentVideo();
            projectSlide.eq(projectCurrentSlide).css('display', 'none');
            projectCurrentSlide = (projectCurrentSlide - 1 + projectSlide.length) % projectSlide.length;
            projectSlide.eq(projectCurrentSlide).css('display', 'block');
            playCurrentVideo();
            clearInterval(projectsSlideInterval); // Ok tuşlarına tıklandığında otomatik dönme işlemini durdur
            startSlideShow(); // Yeniden döngüyü başlat
        }
    });

    // Sonraki slayta geç
    projectNextBtn.on('click', function () {
        if (videoEnded) {
            pauseCurrentVideo();
            projectSlide.eq(projectCurrentSlide).css('display', 'none');
            projectCurrentSlide = (projectCurrentSlide + 1) % projectSlide.length;
            projectSlide.eq(projectCurrentSlide).css('display', 'block');
            playCurrentVideo();
            clearInterval(projectsSlideInterval); // Ok tuşlarına tıklandığında otomatik dönme işlemini durdur
            startSlideShow(); // Yeniden döngüyü başlat
        }
    });

    // Şu anki slayttaki videoları duraklatır
    function pauseCurrentVideo() {
        currentVideo = projectSlide.eq(projectCurrentSlide).find('.video')[0];
        if (currentVideo) {
            currentVideo.pause();
        }
    }

    // Şu anki slayttaki videoları oynatır
    function playCurrentVideo() {
        currentVideo = projectSlide.eq(projectCurrentSlide).find('.video')[0];
        if (currentVideo) {
            videoEnded = false;
            currentVideo.play();
            currentVideo.onended = function () {
                videoEnded = true;
            };
        }
    }

    // Resimler ve videolar varsa ok tuşlarını gizle
    if (projectSlide.length <= 1) {
        projectPrevBtn.css('display', 'none');
        projectNextBtn.css('display', 'none');
    }
});
