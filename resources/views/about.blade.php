@if (5 > 10)
    <p>
        5 is greater than 10
    </p>
@elseif(5 == 10)
    <p>
        5 is equal to 10
    </p>
@else
    <p>
        All the conditions are wrong!
    </p>
@endif 

@unless (empty($name))
    <h2>
        Name is not empty - it is {{ $name }}
    </h2>
@endunless

@empty($name)
    <h2>
        Name is empty
    </h2>
@endempty

@isset($name)
    <h2>
        name is set
    </h2>
@endisset

@switch($name)
    @case("John")
        <h2>
            Name is john
        </h2>
    @break

    @case("Dary")
        <h2>
            Name is Dary
        </h2>
    @break

    @default
        <h2>
           No match found
        </h2>
@endswitch


@for ($i = 0; $i < 10; $i++)
    <h2>
        Number is {{ $i }}
    </h2>

    <p>
        {{ count($names) }}
    </p>
@endfor

@foreach ($names as $itemName)
    <p>
        {{ $itemName }}
    </p>
@endforeach

@forelse ($names2 as $itemName)
    <p>
        $itemName
    </p>
@empty
    <p>
        Array is empty
    </p>
@endforelse

{{ $i = 0 }}
@while( $i<10)
    <p>
        {{ $i }}
    </p>
    {{ $i++ }}
@endwhile