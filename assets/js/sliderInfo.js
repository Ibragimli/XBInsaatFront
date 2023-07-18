(document).ready(function () {
    const slidesInfo = $('.projectInfoSlide');
    const projectInfoPrevBtn = $('.info-prev-btn');
    const projectInfoNextBtn = $('.info-next-btn');
    let slideInfoInterval;
    let currentVideo;
    let videoEnded = true;
    let currentInfoSlide = 0;
    // İlk slaytı göster
    slidesInfo.eq(currentInfoSlide).css('display', 'block');

    // Otomatik dönme işlemini başlat
    startSlideShow();

    // Slayt gösterisini başlatan fonksiyon
    function startSlideShow() {
        slideInfoInterval = setInterval(nextSlide, 8000); // Saniyede bir döndürmek için 8000 milisaniye (8 saniye)
    }

    // Slaytı bir sonraki slayta geçiren fonksiyon
    function nextSlide() {
        if (videoEnded) {
            pauseCurrentVideo();
            slidesInfo.eq(currentInfoSlide).css('display', 'none');
            currentInfoSlide = (currentInfoSlide + 1) % slidesInfo.length;
            slidesInfo.eq(currentInfoSlide).css('display', 'block');
            playCurrentVideo();
        }
    }

    // Önceki slayta geç
    projectInfoPrevBtn.on('click', function () {
        if (videoEnded) {
            pauseCurrentVideo();
            slidesInfo.eq(currentInfoSlide).css('display', 'none');
            currentInfoSlide = (currentInfoSlide - 1 + slidesInfo.length) % slidesInfo.length;
            slidesInfo.eq(currentInfoSlide).css('display', 'block');
            playCurrentVideo();
            clearInterval(slideInfoInterval); // Ok tuşlarına tıklandığında otomatik dönme işlemini durdur
            startSlideShow(); // Yeniden döngüyü başlat
        }
    });

    // Sonraki slayta geç
    projectInfoNextBtn.on('click', function () {
        if (videoEnded) {
            pauseCurrentVideo();
            slidesInfo.eq(currentInfoSlide).css('display', 'none');
            currentInfoSlide = (currentInfoSlide + 1) % slidesInfo.length;
            slidesInfo.eq(currentInfoSlide).css('display', 'block');
            playCurrentVideo();
            clearInterval(slideInfoInterval); // Ok tuşlarına tıklandığında otomatik dönme işlemini durdur
            startSlideShow(); // Yeniden döngüyü başlat
        }
    });

    // Şu anki slayttaki videoları duraklatır
    function pauseCurrentVideo() {
        currentVideo = slidesInfo.eq(currentInfoSlide).find('.video')[0];
        if (currentVideo) {
            currentVideo.pause();
        }
    }

    // Şu anki slayttaki videoları oynatır
    function playCurrentVideo() {
        currentVideo = slidesInfo.eq(currentInfoSlide).find('.video')[0];
        if (currentVideo) {
            videoEnded = false;
            currentVideo.play();
            currentVideo.onended = function () {
                videoEnded = true;
            };
        }
    }

    // Resimler ve videolar varsa ok tuşlarını gizle
    if (slidesInfo.length <= 1) {
        projectInfoPrevBtn.css('display', 'none');
        projectInfoNextBtn.css('display', 'none');
    }
});
