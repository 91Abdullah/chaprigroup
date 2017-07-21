@extends('layout')


@section('content')

    <div class="home-wrapper">
        <header class="header">
            <div class="wrapper header__wrapper">
                <h1 class="header__title">
                    <span class="header__section-title"></span>
                    Healthier lives, happier homes
                </h1>

            </div>

            <picture class="header__picture">
                <img srcset="https://www.rb.com/media/2920/home-header.jpg?anchor=center&mode=crop&width=768&height=432&rnd=131420049170000000" alt="">
            </picture>

        </header>



        <div class="rotate__modules-wrapper">

            @foreach($rotateModules as $key => $module)
                

                @component('module.rotate')

                    @slot('z_index') 

                        {{ count($rotateModules) - $key }}

                    @endslot

                    @slot('color')

                        {{ $module->color }}

                    @endslot

                    @slot('text_button')

                        {{ $module->text_button }}

                    @endslot

                    @slot('intro_copy')

                        {!! $module->intro_copy !!}

                    @endslot

                    @slot('title')

                        {{ $module->title }}

                    @endslot

                    @slot('text_link')

                        {{ $module->text_link }}

                    @endslot

                @endcomponent


            @endforeach
            
            
        </div>

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
                                    <a href="/about-us/" class="footer__link" title="About us">About us</a>
                                </li>
                            </ul>
                            <ul class="col-sm-4 footer__links">

                                <li class="footer__links-item">
                                    <a href="/brands/" class="footer__link" title="Brands">Brands</a>
                                </li>
                            </ul>
                            <ul class="col-sm-4 footer__links">

                                <li class="footer__links-item">
                                    <a href="/innovation/" class="footer__link" title="Innovation">Innovation</a>
                                </li>
                            </ul>

                        </div>
                    </div>


                <div class="footer__content">
                    <p><span>Please read our </span><a href="/terms-and-conditions/" title="Terms and Conditions" onclick="_gaq.push(['_trackEvent', 'Discover RB - Home - RB', 'Outbound Link', 'legal terms and conditions - general.aspx?pageid=7']);" data-id="13103">legal terms and conditions</a><span> and </span><a href="/privacy-policy/" title="Privacy Policy" onclick="_gaq.push(['_trackEvent', 'Discover RB - Home - RB', 'Outbound Link', 'privacy statement - general.aspx?pageid=8']);" data-id="13104">privacy statement</a><span>. © Copyright Reckitt Benckiser Group plc. All rights reserved</span></p>
                    <p> </p>
                    <p><span>Reckitt Benckiser Group plc  |  Registered office at 103 - 105 Bath Road, Slough, Berkshire, SL1 3UH  |  Registered in England &amp; Wales, No 6270876</span></p>
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
                            <a href="/about-us/contact/" class="footer__share-link">
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
                            Follow RB
                        </a>
                    </li>
                </ul>
            </div>
        </footer>

    </div>

@endsection