@extends('layout')


@section('content')

    @component('component.page-header')

        @slot('title')
            Careers
        @endslot

        @slot('backLink')
            {{ url('/') }}
        @endslot

        @slot('backLinkText')
            Home
        @endslot

        @slot('imgUrl')
            @mobile
                {{ Image::url(url('storage/uploads/Top.jpg'), 360, 470, ['crop' => true]) }}
            @elsemobile
                {{ Image::url(url('storage/uploads/Top.jpg'), 1349, 749,['crop' => true]) }}
            @endmobile
        @endslot

    @endcomponent

    <div class="umb-grid">
        <div class="grid-section">
            <div>
                <div class="row clearfix clear-row">
                    <div class="col-md-12 column clear-column">
                        
                        <div class="top_copy">
                            @component('component.copy')

                                @slot('color')
                                    white
                                @endslot

                                @slot('title')
                                    Are we a match?
                                @endslot

                                @slot('content')
                                    <p>
                                        Here in Chapri group, we’re trusted with full accountability and autonomy from day one. Our entrepreneurial culture provides us with the opportunity to make a real difference. Our career possibilities are limitless because we’re not defined by rigid career paths. We values the work of every member, inn every team. We pride ourselves on creating open and collaborative work environments that inspire creativity and innovative thinking. Check out our job listing (Button) to find an opportunity for you.
                                    </p>
                                    <p>
                                        Each journey through us is different – you can truly make your mark. If this sounds like you, we’d love to hear from you!
                                    </p>
                                    <p>
                                        @component('component.button-primary')
                                            @slot('text')
                                                Apply Now
                                            @endslot
                                            @slot('link')
                                                #
                                            @endslot
                                        @endcomponent
                                    </p>
                                @endslot

                            @endcomponent
                        </div>

                        
                    </div>
                </div>
            </div>
            <div>
                <div class="row clearfix clear-row">
                    <div class="col-md-12 column clear-column">
                        @component('component.quote')
                            @slot('type')
                                gradient
                            @endslot
                            @slot('content')
                                "We challenge ourselves and each other every day, but we also know how to have fun. That makes US a creative and fun place to be."
                            @endslot
                        @endcomponent

                        @component('component.copy')

                            @slot('color')
                                white
                            @endslot

                            @slot('title')
                                No red tape, no excuses, no limits
                            @endslot

                            @slot('content')
                                <p>
                                    We're always looking for you in these disciplines.
                                </p>
                            @endslot

                        @endcomponent

                        @component('component.teasers')
                            @slot('content')
                                @foreach($teasers as $teaser)
                                    @component('component.teaser')

                                        

                                        @slot('link')
                                            {{ $teaser->link }}
                                        @endslot

                                        @slot('title')
                                            {{ $teaser->title }}
                                        @endslot

                                        @slot('content')
                                            {!! $teaser->content !!}
                                        @endslot

                                        @slot('img')
                                            {{ Image::url(url($teaser->img), 366, 245, ['crop']) }}
                                        @endslot

                                    @endcomponent
                                @endforeach
                            @endslot
                        @endcomponent
                    </div>
                </div>
            </div>
        </div>
    </div>

    @include('component.footer')

@endsection