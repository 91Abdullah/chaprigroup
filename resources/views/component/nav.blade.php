<nav class="main-nav">
    <div class="wrapper main-nav__wrapper">

        <a href="#" class="main-nav__toggle js-toggle-nav" title="">
            <span>Menu</span>
            <svg width="25" height="25" class="main-nav__toggle-image"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-menu-burger"></use></svg>
        </a>

        <a href="{{ url('/') }}" class="main-nav__logo" title="Chapri Group - We create the best!">
            <img src="{{ Image::url(url('storage/uploads/chapri-group-logo.png'), 180, 82, ['crop']) }}" alt="Chapri Group - We create the best!" class="main-nav__logo-image">
        </a>
        {{--  <a href="{{ url('/') }}" class="main-nav__logo" title="">
            <svg width="150" height="82" class="main-nav__logo-image">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-logo"></use>
            </svg>
            <img src="{{ asset('images/logo.png') }}" alt="RB - Health, Hygiene, Home" class="main-nav__logo-image--alt">
        </a>  --}}
        {{-- <a href="#" class="main-nav__search" title="">
            <svg width="21" height="22" class="main-nav__search-image">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-search"></use>
            </svg>
        </a> --}}

        {{-- <a href="#" class="main-nav__countries" title="">
            <svg width="18" height="18" class="main-nav__countries-image">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-globe"></use>
            </svg>
        </a> --}}

        <div class="main-nav-mobile js-main-nav-content">

            <div class="clearfix main-nav-mobile__search">

                <div class="row">
                    {{-- <form id="search-form" action="/umbraco/Api/Search/SearchPartioned" method="get" class="col-xs-7 col-sm-8">
                        <svg width="21" height="22" class="main-nav__search-image">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-search"></use>
                        </svg>
                        <input id="query" type="text" name="query" placeholder="Search" class="main-nav-mobile__search-input" autocomplete="off"
                        />

                        <input id="region" name="region" type="hidden" value="en-GB" />
                        <input id="rootId" name="rootId" type="hidden" value="11945" />
                        <input data-val="true" data-val-number="The field MaxNoToTake must be a number." data-val-required="The MaxNoToTake field is required."
                            id="noToTake" name="MaxNoToTake" type="hidden" value="10" />
                        <input data-val="true" data-val-number="The field RegionMediaFolderId must be a number." data-val-required="The RegionMediaFolderId field is required."
                            id="mediaRootId" name="RegionMediaFolderId" type="hidden" value="13304" />
                        <input data-val="true" data-val-required="The SearchPdf field is required." id="searchMedia" name="SearchPdf" type="hidden"
                            value="True" />
                    </form>

                    @verbatim
                    <script id="searchResultsTemplate" type="x-tmpl-mustache">
                        {{#noResults}}
                            <p>No Results</p>
                        {{/noResults}}
                        {{#hasContent}}    
                            <div class="main-nav-search__section col-md-6">
                                <h3 class="main-nav-search__heading">Top Results</h3>
                                <ul class="main-nav-search__list">
                                {{#content}}
                                    <li class="main-nav-search__item">
                                        <a href="{{{url}}}" class="main-nav-search__link" title="{{name}}">{{name}}</a>
                                    </li>
                                {{/content}}
                                </ul>
                            </div>
                        {{/hasContent}}
                        {{#hasNews}}
                        <div class="main-nav-search__section col-md-6">
                            <h3 class="main-nav-search__heading">News</h3>
                            <ul class="main-nav-search__list">
                                {{#news}}
                                <li class="main-nav-search__item">
                                    <a href="{{{url}}}" class="main-nav-search__link" title="{{name}}">{{name}}</a>
                                </li>
                                {{/news}}
                            </ul>
                        </div>
                        {{/hasNews}}
                        {{#hasLocations}}
                        <div class="main-nav-search__section col-md-6">
                            <h3 class="main-nav-search__heading">Global locations</h3>
                            <ul class="main-nav-search__list">
                                {{#locations}}
                                <li class="main-nav-search__item">
                                    <a href="{{{url}}}" class="main-nav-search__link" title="{{name}}">{{name}}</a>
                                </li>
                                {{/locations}}
                            </ul>
                        </div>
                        {{/hasLocations}}
                        {{#hasMedia}}
                        <div class="main-nav-search__section col-md-6">
                            <h3 class="main-nav-search__heading">Documents</h3>
                            <ul class="main-nav-search__list">
                                {{#pdfs}}
                                <li class="main-nav-search__item">
                                    <a href="{{{url}}}" target="_blank" class="main-nav-search__link" title="{{name}}">{{name}}</a>
                                </li>
                                {{/pdfs}}
                            </ul>
                        </div>
                        {{/hasMedia}}  
                    </script>
                    @endverbatim --}}

                    <div class="col-xs-5 col-sm-3 col-sm-offset-9 main-nav-mobile__close-wrapper">

                        <a href="#" class="main-nav-mobile__close js-toggle-mobile-nav" title="Close menu">
                            <svg width="18" height="18" class="main-nav-mobile__close-image">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cross"></use>
                            </svg>
                        </a>

                        {{-- <div class="main-nav-mobile__country-selector">
                            <svg width="18" height="18" class="main-nav-mobile__country-selector-globe">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-globe"></use>
                            </svg>
                        </div> --}}
                    </div>

                </div>
            </div>

            <div class="main-nav-search__results">
                <div class="main-nav-search__container row">
                </div>
            </div>

            {{-- <div class="clearfix main-nav-countries">

                <div class="main-nav-countries__container">
                    <h3 class="main-nav-countries__title"><span>Select a country</span></h3>

                    <div class="main-nav-countries__list-wrapper clearfix js-country-selector">
                        <ul class="main-nav-countries__list"></ul>
                    </div>

                </div>
            </div> --}}

            <ul class="main-nav__list">

                <li class="main-nav__item">

                    <svg class="main-nav__item-icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-plus"></use>
                    </svg>

                    <a href="{{ route('about-us') }}" class="main-nav__link" title="About us">
                        <span class="main-nav__link-text">About us</span>
                    </a>
                </li>
                <li class="main-nav__item">

                    <svg class="main-nav__item-icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-plus"></use>
                    </svg>

                    <a href="{{ route('divisions') }}" class="main-nav__link" title="Divisions">
                        <span class="main-nav__link-text">Divisions</span>
                    </a>

                    <ul class="main-nav__sub">

                        <li class="main-nav__item">
                            <a href="{{ route('production') }}" class="main-nav__link" title="Production">
                                <span class="main-nav__link-text">Production</span>
                            </a>
                        </li>
                        <li class="main-nav__item">
                            <a href="{{ route('construction') }}" class="main-nav__link" title="Construction">
                                <span class="main-nav__link-text">Construction</span>
                            </a>
                        </li>
                        <li class="main-nav__item">
                            <a href="{{ route('trade') }}" class="main-nav__link" title="Trade">
                                <span class="main-nav__link-text">Trade</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="main-nav__item">

                    <svg class="main-nav__item-icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-plus"></use>
                    </svg>

                    <a href="{{ route('brands') }}" class="main-nav__link" title="Products & Brands">
                        <span class="main-nav__link-text">Products & Brands</span>
                    </a>
                </li>
                <li class="main-nav__item">

                    <svg class="main-nav__item-icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-plus"></use>
                    </svg>

                    <a href="{{ route('career') }}" class="main-nav__link" title="Career">
                        <span class="main-nav__link-text">Career</span>
                    </a>
                </li>
                <li class="main-nav__item">

                    <svg class="main-nav__item-icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-plus"></use>
                    </svg>

                    <a href="{{ route('contact-us') }}" class="main-nav__link" title="Contact Us">
                        <span class="main-nav__link-text">Contact Us</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>