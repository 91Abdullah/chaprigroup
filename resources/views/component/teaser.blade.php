
<div class="teaser teaser--image-cols col-md-4">
    <div class="teaser__picture-wrapper">
        <a href="{{ $link }}">
            <h2 class="teaser__title">
                <span class="teaser__title-text">
                    {{ $title }}
                </span>
            </h2>
            <picture class="teaser__picture">
                <img srcset="{{ $img }}" alt="" class="teaser__image">
            </picture>
        </a>
    </div>
    <div class="teaser__content">
        {{ $content }}
    </div>
    <div class="teaser__links">
        <a href="{{ $link }}">
            <svg width="24" height="24"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-right"></use></svg>
            <span class="teaser__link-text">{{ $title }}</span>
        </a>    
    </div>
</div>