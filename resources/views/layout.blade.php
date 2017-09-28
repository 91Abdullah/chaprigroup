<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Chapri Group - We create the best!</title>
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
    @yield('styles')
</head>
<body role="document" itemscope itemtype="http://schema.org/WebPage" class="corehome sk-language-en sk-country-gb">
    
    @include('component.nav')


    @yield('content')

    <script type="text/template" class="js-share-overlay">
        <section class="overlay overlay--share" style="display: block;">

            <a href="#" title="Close" class="overlay__close js-overlay-close">
                <svg class="overlay__close-image" width="50" height="50">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-corner-close"></use>
                </svg>
            </a>

            <div class="wrapper">

                <h2 class="overlay__title">Share</h2>

                <div class="overlay__content">
                    
                </div>

                <div class="overlay__links">

                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3a%2f%2fwww.rb.com%2f%25257B%25257BImageUrl%25257D%25257D%2f%3fanchor%3dcenter%26mode%3dmax%26width%3d465%26height%3d453" title="Facebook" target="_blank"  class="overlay__link-icon">
                        <img data-icon-alias="facebook-square" class="brand-social__icon" alt="Facebook" />
                    </a>
                    <a href="https://twitter.com/intent/tweet?url=https%3a%2f%2fwww.rb.com%2f%25257B%25257BImageUrl%25257D%25257D%2f%3fanchor%3dcenter%26mode%3dmax%26width%3d465%26height%3d453" title="Twitter" target="_blank"  class="overlay__link-icon">
                        <img data-icon-alias="twitter-square" class="brand-social__icon" alt="Twitter" />
                    </a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3a%2f%2fwww.rb.com%2f%25257B%25257BImageUrl%25257D%25257D%2f%3fanchor%3dcenter%26mode%3dmax%26width%3d465%26height%3d453" title="Linked In" target="_blank"  class="overlay__link-icon">
                        <img data-icon-alias="linkedin" class="brand-social__icon" alt="Linked In" />
                    </a>

                </div>

            </div>

        </section>
    </script>
        <script type="text/template" class="js-follow-overlay">
        <section class="overlay overlay--follow" style="display: block;">

            <a href="#" title="Close" class="overlay__close js-overlay-close">
                <svg class="overlay__close-image" width="50" height="50">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-corner-close"></use>
                </svg>
            </a>

            <div class="wrapper">

                <h2 class="overlay__title">Follow RB</h2>

                <div class="overlay__content">
                    
                </div>

                <div class="overlay__links">

                        <a href="https://www.facebook.com/discoverRB" title="Facebook" target="_blank"  class="overlay__link-icon">
                            <img data-icon-alias="facebook-square" class="brand-social__icon" alt="Facebook" />
                        </a>
                        <a href="https://twitter.com/discoverRB" title="Twitter" target="_blank"  class="overlay__link-icon">
                            <img data-icon-alias="twitter-square" class="brand-social__icon" alt="Twitter" />
                        </a>
                        <a href="https://www.youtube.com/user/RBworldwide" title="YouTube" target="_blank"  class="overlay__link-icon">
                            <img data-icon-alias="youtube-square" class="brand-social__icon" alt="YouTube" />
                        </a>
                        <a href="https://www.linkedin.com/company/discoverrb" title="LinkedIn"  class="overlay__link-icon">
                            <img data-icon-alias="linkedin" class="brand-social__icon" alt="LinkedIn" />
                        </a>
                    
                </div>

            </div>

        </section>
    </script>


    <script src="https://www.youtube.com/iframe_api"></script>
    <script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
    <script>
        window.jQuery || document.write('<script src="{{ asset(`js/jquery-1.10.2.min.js`) }}"><\/script>')
    </script>

    <script>
        var ajax = new XMLHttpRequest();
        ajax.open("GET", "{{ asset('images/icons.svg') }}", true);
        ajax.send();
        ajax.onload = function (e) {
            var $svg = $(ajax.responseText);
            $('body').prepend($svg);
        }
    </script>
    @yield('overlay-scripts')
    <script src="{{ asset('js/scripts.js') }}"></script>
    @yield('scripts')
</body>
</html>