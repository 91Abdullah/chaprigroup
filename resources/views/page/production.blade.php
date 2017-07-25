@extends('layout')


@section('content')

    @component('component.page-header')

        @slot('title')
            Production
        @endslot

        @slot('backLink')
            {{ route('divisions') }}
        @endslot

        @slot('backLinkText')
            Divisions
        @endslot

        @slot('imgUrl')
            @mobile
                {{ Image::url(url('storage/uploads/about-us-manufacture.jpg'), 360, 470, ['crop' => true]) }}
            @elsemobile
                {{ Image::url(url('storage/uploads/about-us-manufacture.jpg'), 1349, 749,['crop' => true]) }}
            @endmobile
        @endslot

    @endcomponent

    @component('component.umb-grid')
        @slot('content')
            <div class="top-copy">

                @component('component.copy')

                    @slot('color')
                        white
                    @endslot

                    @slot('title')
                        Manufacture
                    @endslot

                    @slot('content')
                        {!! $division->description !!}
                    @endslot

                @endcomponent

                @component('component.brands')
                    @slot('content')
                        @component('component.brand')
                            @slot('imgLink')
                                {{ route($division->route) }}
                            @endslot
                            @slot('imgUrl')
                                {{ Image::url(url('storage/uploads/' . $division->imgUrl), 442, 442, ['crop' => true]) }}
                            @endslot
                            @slot('division_name')
                                {{ $division->name }}
                            @endslot
                        @endcomponent
                    @endslot
                @endcomponent

            </div>
        @endslot
    @endcomponent

    @include('component.footer')

@endsection