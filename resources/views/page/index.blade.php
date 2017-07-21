@extends('layout')


@section('content')

    <div class="home-wrapper">
        @component('component.header')

            @slot('title')
                Healthier lives, happier homes
            @endslot

            @slot('imgUrl')
                @mobile
                    {{ Image::url(url('storage/uploads/home-header.jpg'), 360, 470, ['crop']) }}
                @elsemobile
                    {{ Image::url(url('storage/uploads/home-header.jpg')) }}
                @endmobile
            @endslot

        @endcomponent

        <div class="rotate__modules-wrapper">

            @foreach($rotateModules as $key => $module)
                
                @component('module.rotate')

                    @slot('image')
                        @if(!is_null($module->image))
                            @mobile
                                {{ Image::url(url($module->image), 360, 940, ['gamma' => 0.1, 'crop']) }}
                            @elsemobile
                                {{ Image::url(url($module->image), 768, 432, ['gamma' => 0.1, 'crop']) }}
                            @endmobile
                        @else
                            {{ $module->image }}
                        @endif
                    @endslot

                    @slot('class')
                        {{ $module->class }}
                    @endslot

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

                    @slot('link')
                        {{ $module->link }}
                    @endslot

                    @slot('text_link')

                        {{ $module->text_link }}

                    @endslot

                @endcomponent


            @endforeach
            
            
        </div>
        

        @include('component.footer')

    </div>

@endsection