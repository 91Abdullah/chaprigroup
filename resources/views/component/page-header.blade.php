<header class="header">
    <div class="wrapper header__wrapper">
        <h1 class="header__title">
            <span class="header__section-title"></span>
            {{ $title }}
        </h1>
        <a href="{{ $backLink }}" title="" class="button button--link header__back-link">
            <svg>
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-chevron-left"></use>
            </svg>
            {{ $backLinkText }}
        </a>

    </div>

    <picture class="header__picture">
        <img srcset="{!! $imgUrl !!}" alt="">
    </picture>

</header>