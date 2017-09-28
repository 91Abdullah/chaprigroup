

<div class="rotate__module {{ !($image == '') ? 'rotate__module-with-image' : '' }}" style="z-index: {{ $z_index }}">
    <div class="rotate__module-inner {{ ($image == '') ? 'rotate__module--' . $color : '' }}">
        @if(!($image == ''))
            <picture class="rotate__module-background-image">
                <img srcset="{!! $image !!}" alt="">
            </picture>            
        @endif
        <div class="rotate__module-content {{ $class }}">

            <div class="generic__module-button-container">
                <a href="{{ $link }}" class="generic__module-button">
                    {{ $text_button }}
                    <svg width="18" height="18">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-chevron-right"></use>
                    </svg>

                </a>
            </div>


            <div class="generic__module-content-container {{ $extra_content == '' ? 'restrict' : '' }}">
                <div class="generic__module-intro-copy">
                    {{ $intro_copy }}
                </div>
                <h2 class="generic__module-title">
                    {{ $title }}
                </h2>

                {{ $extra_content }}
                    
                <a href="{{ $link }}" target="" class="generic__module-text-link">
                    {{ $text_link }}
                    <svg width="9" height="9">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-chevron-right"></use>
                    </svg>

                </a>
            </div>
        </div>
    </div>
</div>