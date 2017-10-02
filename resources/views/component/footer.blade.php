<footer class="footer">
    <div class="wrapper">

        <div class="footer__back-link-container">
            <a href="#" class="button button--invert button--big" title="Back to top">Back to top</a>
        </div>

            <div id="footer_more">
                <h2 class="footer__header">More From Home</h2>
                <div class="row footer__row">
                    <ul class="col-sm-4 footer__links">

                        <li class="footer__links-item">
                            <a href="{{ route('about-us') }}" class="footer__link" title="About us">About us</a>
                        </li>
                    </ul>
                    <ul class="col-sm-4 footer__links">

                        <li class="footer__links-item">
                            <a href="{{ route('brands') }}" class="footer__link" title="Brands">Brands</a>
                        </li>
                    </ul>
                    <ul class="col-sm-4 footer__links">

                        <li class="footer__links-item">
                            <a href="{{ route('career') }}" class="footer__link" title="Career">Career</a>
                        </li>
                    </ul>

                </div>
            </div>


        <div class="footer__content">
            <p><span>Chapri Group  |  Registered office at Suite No. 220, Hussain Trade Center, Altaf Hussain Road, New Chali, Karachi  |  Registered in Pakistan</span></p>
            <br />
            <p><span>Kashif Attari - Sales Manager <b>00923212393822</b> | Rameez Majeed - Sales Representative <b>00923018282137</b> | Head Office - <b>00922134525702-03</b></span></p>
        </div>

    </div>

    <div class="footer__share">
        <ul class="wrapper">
            <li class="col-xs-4 footer__share-item">
                <a href="#" class="footer__share-link js-open-share-overlay">
                    <svg width="47" height="47" class="footer__share-image">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-share"></use>
                    </svg>
                    Share
                </a>
            </li>

            <li class="col-xs-4 footer__share-item">
                <a href="{{ route('contact-us') }}" class="footer__share-link">
                    <svg width="47" height="47" class="footer__share-image">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-contact"></use>
                    </svg>
                    Contact
                </a>
            </li>

            <li class="col-xs-4 footer__share-item">
                <a href="#" class="footer__share-link js-open-follow-overlay">
                    <svg width="47" height="47" class="footer__share-image">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-followrb"></use>
                    </svg>
                    Follow ChapriGroup
                </a>
            </li>
        </ul>
    </div>
</footer>