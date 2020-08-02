if (typeof Object.assign != 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) { // .length of function is 2
        'use strict';
        if (target == null) { // TypeError if undefined or null
          throw new TypeError('Cannot convert undefined or null to object');
        }
  
        var to = Object(target);
  
        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];
  
          if (nextSource != null) { // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
  }

var css_3d = {} || css_3d;

css_3d.vector2 = function vector2( x, y ) {
    this.x = x || 0;
    this.y = y || 0;
}
Object.defineProperties( css_3d.vector2.prototype, {

    "width": {

        get: function () {

            return this.x;

        },

        set: function ( value ) {

            this.x = value;

        }

    },

    "height": {

        get: function () {

            return this.y;

        },

        set: function ( value ) {

            this.y = value;

        }

    }

} );
Object.assign( css_3d.vector2.prototype, {

    isVector2: true,

    set: function ( x, y ) {

        this.x = x;
        this.y = y;

        return this;

    },

    setScalar: function ( scalar ) {

        this.x = scalar;
        this.y = scalar;

        return this;

    },

    setX: function ( x ) {

        this.x = x;

        return this;

    },

    setY: function ( y ) {

        this.y = y;

        return this;

    },

    setComponent: function ( index, value ) {

        switch ( index ) {

            case 0: this.x = value; break;
            case 1: this.y = value; break;
            default: throw new Error( 'index is out of range: ' + index );

        }

        return this;

    },

    getComponent: function ( index ) {

        switch ( index ) {

            case 0: return this.x;
            case 1: return this.y;
            default: throw new Error( 'index is out of range: ' + index );

        }

    },

    clone: function () {

        return new this.constructor( this.x, this.y );

    },

    copy: function ( v ) {

        this.x = v.x;
        this.y = v.y;

        return this;

    },

    add: function ( v, w ) {

        if ( w !== undefined ) {

            console.warn( 'THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
            return this.addVectors( v, w );

        }

        this.x += v.x;
        this.y += v.y;

        return this;

    },

    addScalar: function ( s ) {

        this.x += s;
        this.y += s;

        return this;

    },

    addVectors: function ( a, b ) {

        this.x = a.x + b.x;
        this.y = a.y + b.y;

        return this;

    },

    addScaledVector: function ( v, s ) {

        this.x += v.x * s;
        this.y += v.y * s;

        return this;

    },

    sub: function ( v, w ) {

        if ( w !== undefined ) {

            console.warn( 'THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
            return this.subVectors( v, w );

        }

        this.x -= v.x;
        this.y -= v.y;

        return this;

    },

    subScalar: function ( s ) {

        this.x -= s;
        this.y -= s;

        return this;

    },

    subVectors: function ( a, b ) {

        this.x = a.x - b.x;
        this.y = a.y - b.y;

        return this;

    },

    multiply: function ( v ) {

        this.x *= v.x;
        this.y *= v.y;

        return this;

    },

    multiplyScalar: function ( scalar ) {

        this.x *= scalar;
        this.y *= scalar;

        return this;

    },

    divide: function ( v ) {

        this.x /= v.x;
        this.y /= v.y;

        return this;

    },

    divideScalar: function ( scalar ) {

        return this.multiplyScalar( 1 / scalar );

    },

    applyMatrix3: function ( m ) {

        var x = this.x, y = this.y;
        var e = m.elements;

        this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ];
        this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ];

        return this;

    },

    min: function ( v ) {

        this.x = Math.min( this.x, v.x );
        this.y = Math.min( this.y, v.y );

        return this;

    },

    max: function ( v ) {

        this.x = Math.max( this.x, v.x );
        this.y = Math.max( this.y, v.y );

        return this;

    },

    clamp: function ( min, max ) {

        // assumes min < max, componentwise

        this.x = Math.max( min.x, Math.min( max.x, this.x ) );
        this.y = Math.max( min.y, Math.min( max.y, this.y ) );

        return this;

    },

    clampScalar: function ( minVal, maxVal ) {

        this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
        this.y = Math.max( minVal, Math.min( maxVal, this.y ) );

        return this;

    },

    clampLength: function ( min, max ) {

        var length = this.length();

        return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

    },

    floor: function () {

        this.x = Math.floor( this.x );
        this.y = Math.floor( this.y );

        return this;

    },

    ceil: function () {

        this.x = Math.ceil( this.x );
        this.y = Math.ceil( this.y );

        return this;

    },

    round: function () {

        this.x = Math.round( this.x );
        this.y = Math.round( this.y );

        return this;

    },

    roundToZero: function () {

        this.x = ( this.x < 0 ) ? Math.ceil( this.x ) : Math.floor( this.x );
        this.y = ( this.y < 0 ) ? Math.ceil( this.y ) : Math.floor( this.y );

        return this;

    },

    negate: function () {

        this.x = - this.x;
        this.y = - this.y;

        return this;

    },

    dot: function ( v ) {

        return this.x * v.x + this.y * v.y;

    },

    cross: function ( v ) {

        return this.x * v.y - this.y * v.x;

    },

    lengthSq: function () {

        return this.x * this.x + this.y * this.y;

    },

    length: function () {

        return Math.sqrt( this.x * this.x + this.y * this.y );

    },

    manhattanLength: function () {

        return Math.abs( this.x ) + Math.abs( this.y );

    },

    normalize: function () {

        return this.divideScalar( this.length() || 1 );

    },

    angle: function () {

        // computes the angle in radians with respect to the positive x-axis

        var angle = Math.atan2( - this.y, - this.x ) + Math.PI;

        return angle;

    },

    distanceTo: function ( v ) {

        return Math.sqrt( this.distanceToSquared( v ) );

    },

    distanceToSquared: function ( v ) {

        var dx = this.x - v.x, dy = this.y - v.y;
        return dx * dx + dy * dy;

    },

    manhattanDistanceTo: function ( v ) {

        return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y );

    },

    setLength: function ( length ) {

        return this.normalize().multiplyScalar( length );

    },

    lerp: function ( v, alpha ) {

        this.x += ( v.x - this.x ) * alpha;
        this.y += ( v.y - this.y ) * alpha;

        return this;

    },

    lerpVectors: function ( v1, v2, alpha ) {

        return this.subVectors( v2, v1 ).multiplyScalar( alpha ).add( v1 );

    },

    equals: function ( v ) {

        return ( ( v.x === this.x ) && ( v.y === this.y ) );

    },

    fromArray: function ( array, offset ) {

        if ( offset === undefined ) { offset = 0; }

        this.x = array[ offset ];
        this.y = array[ offset + 1 ];

        return this;

    },

    toArray: function ( array, offset ) {

        if ( array === undefined ) { array = []; }
        if ( offset === undefined ) { offset = 0; }

        array[ offset ] = this.x;
        array[ offset + 1 ] = this.y;

        return array;

    },

    fromBufferAttribute: function ( attribute, index, offset ) {

        if ( offset !== undefined ) {

            console.warn( 'THREE.Vector2: offset has been removed from .fromBufferAttribute().' );

        }

        this.x = attribute.getX( index );
        this.y = attribute.getY( index );

        return this;

    },

    rotateAround: function ( center, angle ) {

        var c = Math.cos( angle ), s = Math.sin( angle );

        var x = this.x - center.x;
        var y = this.y - center.y;

        this.x = x * c - y * s + center.x;
        this.y = x * s + y * c + center.y;

        return this;

    },

    random: function () {

        this.x = Math.random();
        this.y = Math.random();

        return this;

    }

} );

css_3d.vector3 = function vector3( x, y, z ) {

    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;

}
Object.assign( css_3d.vector3.prototype, {

    isVector3: true,

    set: function ( x, y, z ) {

        this.x = x;
        this.y = y;
        this.z = z;

        return this;

    },

    setScalar: function ( scalar ) {

        this.x = scalar;
        this.y = scalar;
        this.z = scalar;

        return this;

    },

    setX: function ( x ) {

        this.x = x;

        return this;

    },

    setY: function ( y ) {

        this.y = y;

        return this;

    },

    setZ: function ( z ) {

        this.z = z;

        return this;

    },

    setComponent: function ( index, value ) {

        switch ( index ) {

            case 0: this.x = value; break;
            case 1: this.y = value; break;
            case 2: this.z = value; break;
            default: throw new Error( 'index is out of range: ' + index );

        }

        return this;

    },

    getComponent: function ( index ) {

        switch ( index ) {

            case 0: return this.x;
            case 1: return this.y;
            case 2: return this.z;
            default: throw new Error( 'index is out of range: ' + index );

        }

    },

    clone: function () {

        return new this.constructor( this.x, this.y, this.z );

    },

    copy: function ( v ) {

        this.x = v.x;
        this.y = v.y;
        this.z = v.z;

        return this;

    },

    add: function ( v, w ) {

        if ( w !== undefined ) {

            console.warn( 'THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
            return this.addVectors( v, w );

        }

        this.x += v.x;
        this.y += v.y;
        this.z += v.z;

        return this;

    },

    addScalar: function ( s ) {

        this.x += s;
        this.y += s;
        this.z += s;

        return this;

    },

    addVectors: function ( a, b ) {

        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;

        return this;

    },

    addScaledVector: function ( v, s ) {

        this.x += v.x * s;
        this.y += v.y * s;
        this.z += v.z * s;

        return this;

    },

    sub: function ( v, w ) {

        if ( w !== undefined ) {

            console.warn( 'THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
            return this.subVectors( v, w );

        }

        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;

        return this;

    },

    subScalar: function ( s ) {

        this.x -= s;
        this.y -= s;
        this.z -= s;

        return this;

    },

    subVectors: function ( a, b ) {

        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;

        return this;

    },

    multiply: function ( v, w ) {

        if ( w !== undefined ) {

            console.warn( 'THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.' );
            return this.multiplyVectors( v, w );

        }

        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;

        return this;

    },

    multiplyScalar: function ( scalar ) {

        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;

        return this;

    },

    multiplyVectors: function ( a, b ) {

        this.x = a.x * b.x;
        this.y = a.y * b.y;
        this.z = a.z * b.z;

        return this;

    },

    applyEuler: function ( euler ) {

        if ( ! ( euler && euler.isEuler ) ) {

            console.error( 'THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.' );

        }

        return this.applyQuaternion( _quaternion.setFromEuler( euler ) );

    },

    applyAxisAngle: function ( axis, angle ) {

        return this.applyQuaternion( _quaternion.setFromAxisAngle( axis, angle ) );

    },

    applyMatrix3: function ( m ) {

        var x = this.x, y = this.y, z = this.z;
        var e = m.elements;

        this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ] * z;
        this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ] * z;
        this.z = e[ 2 ] * x + e[ 5 ] * y + e[ 8 ] * z;

        return this;

    },

    applyNormalMatrix: function ( m ) {

        return this.applyMatrix3( m ).normalize();

    },

    applyMatrix4: function ( m ) {

        var x = this.x, y = this.y, z = this.z;
        var e = m.elements;

        var w = 1 / ( e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] );

        this.x = ( e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] ) * w;
        this.y = ( e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] ) * w;
        this.z = ( e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] ) * w;

        return this;

    },

    applyQuaternion: function ( q ) {

        var x = this.x, y = this.y, z = this.z;
        var qx = q.x, qy = q.y, qz = q.z, qw = q.w;

        // calculate quat * vector

        var ix = qw * x + qy * z - qz * y;
        var iy = qw * y + qz * x - qx * z;
        var iz = qw * z + qx * y - qy * x;
        var iw = - qx * x - qy * y - qz * z;

        // calculate result * inverse quat

        this.x = ix * qw + iw * - qx + iy * - qz - iz * - qy;
        this.y = iy * qw + iw * - qy + iz * - qx - ix * - qz;
        this.z = iz * qw + iw * - qz + ix * - qy - iy * - qx;

        return this;

    },

    project: function ( camera ) {

        return this.applyMatrix4( camera.matrixWorldInverse ).applyMatrix4( camera.projectionMatrix );

    },

    unproject: function ( camera ) {

        return this.applyMatrix4( camera.projectionMatrixInverse ).applyMatrix4( camera.matrixWorld );

    },

    transformDirection: function ( m ) {

        // input: THREE.Matrix4 affine matrix
        // vector interpreted as a direction

        var x = this.x, y = this.y, z = this.z;
        var e = m.elements;

        this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z;
        this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z;
        this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z;

        return this.normalize();

    },

    divide: function ( v ) {

        this.x /= v.x;
        this.y /= v.y;
        this.z /= v.z;

        return this;

    },

    divideScalar: function ( scalar ) {

        return this.multiplyScalar( 1 / scalar );

    },

    min: function ( v ) {

        this.x = Math.min( this.x, v.x );
        this.y = Math.min( this.y, v.y );
        this.z = Math.min( this.z, v.z );

        return this;

    },

    max: function ( v ) {

        this.x = Math.max( this.x, v.x );
        this.y = Math.max( this.y, v.y );
        this.z = Math.max( this.z, v.z );

        return this;

    },

    clamp: function ( min, max ) {

        // assumes min < max, componentwise

        this.x = Math.max( min.x, Math.min( max.x, this.x ) );
        this.y = Math.max( min.y, Math.min( max.y, this.y ) );
        this.z = Math.max( min.z, Math.min( max.z, this.z ) );

        return this;

    },

    clampScalar: function ( minVal, maxVal ) {

        this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
        this.y = Math.max( minVal, Math.min( maxVal, this.y ) );
        this.z = Math.max( minVal, Math.min( maxVal, this.z ) );

        return this;

    },

    clampLength: function ( min, max ) {

        var length = this.length();

        return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

    },

    floor: function () {

        this.x = Math.floor( this.x );
        this.y = Math.floor( this.y );
        this.z = Math.floor( this.z );

        return this;

    },

    ceil: function () {

        this.x = Math.ceil( this.x );
        this.y = Math.ceil( this.y );
        this.z = Math.ceil( this.z );

        return this;

    },

    round: function () {

        this.x = Math.round( this.x );
        this.y = Math.round( this.y );
        this.z = Math.round( this.z );

        return this;

    },

    roundToZero: function () {

        this.x = ( this.x < 0 ) ? Math.ceil( this.x ) : Math.floor( this.x );
        this.y = ( this.y < 0 ) ? Math.ceil( this.y ) : Math.floor( this.y );
        this.z = ( this.z < 0 ) ? Math.ceil( this.z ) : Math.floor( this.z );

        return this;

    },

    negate: function () {

        this.x = - this.x;
        this.y = - this.y;
        this.z = - this.z;

        return this;

    },

    dot: function ( v ) {

        return this.x * v.x + this.y * v.y + this.z * v.z;

    },

    // TODO lengthSquared?

    lengthSq: function () {

        return this.x * this.x + this.y * this.y + this.z * this.z;

    },

    length: function () {

        return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

    },

    manhattanLength: function () {

        return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z );

    },

    normalize: function () {

        return this.divideScalar( this.length() || 1 );

    },

    setLength: function ( length ) {

        return this.normalize().multiplyScalar( length );

    },

    lerp: function ( v, alpha ) {

        this.x += ( v.x - this.x ) * alpha;
        this.y += ( v.y - this.y ) * alpha;
        this.z += ( v.z - this.z ) * alpha;

        return this;

    },

    lerpVectors: function ( v1, v2, alpha ) {

        return this.subVectors( v2, v1 ).multiplyScalar( alpha ).add( v1 );

    },

    cross: function ( v, w ) {

        if ( w !== undefined ) {

            console.warn( 'THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.' );
            return this.crossVectors( v, w );

        }

        return this.crossVectors( this, v );

    },

    crossVectors: function ( a, b ) {

        var ax = a.x, ay = a.y, az = a.z;
        var bx = b.x, by = b.y, bz = b.z;

        this.x = ay * bz - az * by;
        this.y = az * bx - ax * bz;
        this.z = ax * by - ay * bx;

        return this;

    },

    projectOnVector: function ( v ) {

        var denominator = v.lengthSq();

        if ( denominator === 0 ) { return this.set( 0, 0, 0 ); }

        var scalar = v.dot( this ) / denominator;

        return this.copy( v ).multiplyScalar( scalar );

    },

    projectOnPlane: function ( planeNormal ) {

        _vector.copy( this ).projectOnVector( planeNormal );

        return this.sub( _vector );

    },

    reflect: function ( normal ) {

        // reflect incident vector off plane orthogonal to normal
        // normal is assumed to have unit length

        return this.sub( _vector.copy( normal ).multiplyScalar( 2 * this.dot( normal ) ) );

    },

    angleTo: function ( v ) {

        var denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

        if ( denominator === 0 ) { return Math.PI / 2; }

        var theta = this.dot( v ) / denominator;

        // clamp, to handle numerical problems

        return Math.acos( MathUtils.clamp( theta, - 1, 1 ) );

    },

    distanceTo: function ( v ) {

        return Math.sqrt( this.distanceToSquared( v ) );

    },

    distanceToSquared: function ( v ) {

        var dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;

        return dx * dx + dy * dy + dz * dz;

    },

    manhattanDistanceTo: function ( v ) {

        return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y ) + Math.abs( this.z - v.z );

    },

    setFromSpherical: function ( s ) {

        return this.setFromSphericalCoords( s.radius, s.phi, s.theta );

    },

    setFromSphericalCoords: function ( radius, phi, theta ) {

        var sinPhiRadius = Math.sin( phi ) * radius;

        this.x = sinPhiRadius * Math.sin( theta );
        this.y = Math.cos( phi ) * radius;
        this.z = sinPhiRadius * Math.cos( theta );

        return this;

    },

    setFromCylindrical: function ( c ) {

        return this.setFromCylindricalCoords( c.radius, c.theta, c.y );

    },

    setFromCylindricalCoords: function ( radius, theta, y ) {

        this.x = radius * Math.sin( theta );
        this.y = y;
        this.z = radius * Math.cos( theta );

        return this;

    },

    setFromMatrixPosition: function ( m ) {

        var e = m.elements;

        this.x = e[ 12 ];
        this.y = e[ 13 ];
        this.z = e[ 14 ];

        return this;

    },

    setFromMatrixScale: function ( m ) {

        var sx = this.setFromMatrixColumn( m, 0 ).length();
        var sy = this.setFromMatrixColumn( m, 1 ).length();
        var sz = this.setFromMatrixColumn( m, 2 ).length();

        this.x = sx;
        this.y = sy;
        this.z = sz;

        return this;

    },

    setFromMatrixColumn: function ( m, index ) {

        return this.fromArray( m.elements, index * 4 );

    },

    setFromMatrix3Column: function ( m, index ) {

        return this.fromArray( m.elements, index * 3 );

    },

    equals: function ( v ) {

        return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) );

    },

    fromArray: function ( array, offset ) {

        if ( offset === undefined ) { offset = 0; }

        this.x = array[ offset ];
        this.y = array[ offset + 1 ];
        this.z = array[ offset + 2 ];

        return this;

    },

    toArray: function ( array, offset ) {

        if ( array === undefined ) { array = []; }
        if ( offset === undefined ) { offset = 0; }

        array[ offset ] = this.x;
        array[ offset + 1 ] = this.y;
        array[ offset + 2 ] = this.z;

        return array;

    },

    fromBufferAttribute: function ( attribute, index, offset ) {

        if ( offset !== undefined ) {

            console.warn( 'THREE.Vector3: offset has been removed from .fromBufferAttribute().' );

        }

        this.x = attribute.getX( index );
        this.y = attribute.getY( index );
        this.z = attribute.getZ( index );

        return this;

    },

    random: function () {

        this.x = Math.random();
        this.y = Math.random();
        this.z = Math.random();

        return this;

    }

} );


css_3d.matrix3 = function matrix3(){
    this.elements = [
        1, 0, 0,
        0, 1, 0,
        0, 0, 1
    ];

    if ( arguments.length > 0 ) {
        console.error( 'the constructor no longer reads arguments. use .set() instead.' );
    }
}
Object.assign( css_3d.matrix3.prototype, {

    isMatrix3: true,

    set: function ( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

        var te = this.elements;

        te[ 0 ] = n11; te[ 1 ] = n21; te[ 2 ] = n31;
        te[ 3 ] = n12; te[ 4 ] = n22; te[ 5 ] = n32;
        te[ 6 ] = n13; te[ 7 ] = n23; te[ 8 ] = n33;

        return this;

    },

    identity: function () {

        this.set(

            1, 0, 0,
            0, 1, 0,
            0, 0, 1

        );

        return this;

    },

    clone: function () {

        return new this.constructor().fromArray( this.elements );

    },

    copy: function ( m ) {

        var te = this.elements;
        var me = m.elements;

        te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ];
        te[ 3 ] = me[ 3 ]; te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ];
        te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ]; te[ 8 ] = me[ 8 ];

        return this;

    },

    extractBasis: function ( xAxis, yAxis, zAxis ) {

        xAxis.setFromMatrix3Column( this, 0 );
        yAxis.setFromMatrix3Column( this, 1 );
        zAxis.setFromMatrix3Column( this, 2 );

        return this;

    },

    setFromMatrix4: function ( m ) {

        var me = m.elements;

        this.set(

            me[ 0 ], me[ 4 ], me[ 8 ],
            me[ 1 ], me[ 5 ], me[ 9 ],
            me[ 2 ], me[ 6 ], me[ 10 ]

        );

        return this;

    },

    multiply: function ( m ) {

        return this.multiplyMatrices( this, m );

    },

    premultiply: function ( m ) {

        return this.multiplyMatrices( m, this );

    },

    multiplyMatrices: function ( a, b ) {

        var ae = a.elements;
        var be = b.elements;
        var te = this.elements;

        var a11 = ae[ 0 ], a12 = ae[ 3 ], a13 = ae[ 6 ];
        var a21 = ae[ 1 ], a22 = ae[ 4 ], a23 = ae[ 7 ];
        var a31 = ae[ 2 ], a32 = ae[ 5 ], a33 = ae[ 8 ];

        var b11 = be[ 0 ], b12 = be[ 3 ], b13 = be[ 6 ];
        var b21 = be[ 1 ], b22 = be[ 4 ], b23 = be[ 7 ];
        var b31 = be[ 2 ], b32 = be[ 5 ], b33 = be[ 8 ];

        te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31;
        te[ 3 ] = a11 * b12 + a12 * b22 + a13 * b32;
        te[ 6 ] = a11 * b13 + a12 * b23 + a13 * b33;

        te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31;
        te[ 4 ] = a21 * b12 + a22 * b22 + a23 * b32;
        te[ 7 ] = a21 * b13 + a22 * b23 + a23 * b33;

        te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31;
        te[ 5 ] = a31 * b12 + a32 * b22 + a33 * b32;
        te[ 8 ] = a31 * b13 + a32 * b23 + a33 * b33;

        return this;

    },

    multiplyScalar: function ( s ) {

        var te = this.elements;

        te[ 0 ] *= s; te[ 3 ] *= s; te[ 6 ] *= s;
        te[ 1 ] *= s; te[ 4 ] *= s; te[ 7 ] *= s;
        te[ 2 ] *= s; te[ 5 ] *= s; te[ 8 ] *= s;

        return this;

    },

    determinant: function () {

        var te = this.elements;

        var a = te[ 0 ], b = te[ 1 ], c = te[ 2 ],
            d = te[ 3 ], e = te[ 4 ], f = te[ 5 ],
            g = te[ 6 ], h = te[ 7 ], i = te[ 8 ];

        return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;

    },

    getInverse: function ( matrix, throwOnDegenerate ) {

        if ( throwOnDegenerate !== undefined ) {

            console.warn( "THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate." );

        }

        var me = matrix.elements,
            te = this.elements,

            n11 = me[ 0 ], n21 = me[ 1 ], n31 = me[ 2 ],
            n12 = me[ 3 ], n22 = me[ 4 ], n32 = me[ 5 ],
            n13 = me[ 6 ], n23 = me[ 7 ], n33 = me[ 8 ],

            t11 = n33 * n22 - n32 * n23,
            t12 = n32 * n13 - n33 * n12,
            t13 = n23 * n12 - n22 * n13,

            det = n11 * t11 + n21 * t12 + n31 * t13;

        if ( det === 0 ) { return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0 ); }

        var detInv = 1 / det;

        te[ 0 ] = t11 * detInv;
        te[ 1 ] = ( n31 * n23 - n33 * n21 ) * detInv;
        te[ 2 ] = ( n32 * n21 - n31 * n22 ) * detInv;

        te[ 3 ] = t12 * detInv;
        te[ 4 ] = ( n33 * n11 - n31 * n13 ) * detInv;
        te[ 5 ] = ( n31 * n12 - n32 * n11 ) * detInv;

        te[ 6 ] = t13 * detInv;
        te[ 7 ] = ( n21 * n13 - n23 * n11 ) * detInv;
        te[ 8 ] = ( n22 * n11 - n21 * n12 ) * detInv;

        return this;

    },

    transpose: function () {

        var tmp, m = this.elements;

        tmp = m[ 1 ]; m[ 1 ] = m[ 3 ]; m[ 3 ] = tmp;
        tmp = m[ 2 ]; m[ 2 ] = m[ 6 ]; m[ 6 ] = tmp;
        tmp = m[ 5 ]; m[ 5 ] = m[ 7 ]; m[ 7 ] = tmp;

        return this;

    },

    getNormalMatrix: function ( matrix4 ) {

        return this.setFromMatrix4( matrix4 ).getInverse( this ).transpose();

    },

    transposeIntoArray: function ( r ) {

        var m = this.elements;

        r[ 0 ] = m[ 0 ];
        r[ 1 ] = m[ 3 ];
        r[ 2 ] = m[ 6 ];
        r[ 3 ] = m[ 1 ];
        r[ 4 ] = m[ 4 ];
        r[ 5 ] = m[ 7 ];
        r[ 6 ] = m[ 2 ];
        r[ 7 ] = m[ 5 ];
        r[ 8 ] = m[ 8 ];

        return this;

    },

    setUvTransform: function ( tx, ty, sx, sy, rotation, cx, cy ) {

        var c = Math.cos( rotation );
        var s = Math.sin( rotation );

        this.set(
            sx * c, sx * s, - sx * ( c * cx + s * cy ) + cx + tx,
            - sy * s, sy * c, - sy * ( - s * cx + c * cy ) + cy + ty,
            0, 0, 1
        );

    },

    scale: function ( sx, sy ) {

        var te = this.elements;

        te[ 0 ] *= sx; te[ 3 ] *= sx; te[ 6 ] *= sx;
        te[ 1 ] *= sy; te[ 4 ] *= sy; te[ 7 ] *= sy;

        return this;

    },

    rotate: function ( theta ) {

        var c = Math.cos( theta );
        var s = Math.sin( theta );

        var te = this.elements;

        var a11 = te[ 0 ], a12 = te[ 3 ], a13 = te[ 6 ];
        var a21 = te[ 1 ], a22 = te[ 4 ], a23 = te[ 7 ];

        te[ 0 ] = c * a11 + s * a21;
        te[ 3 ] = c * a12 + s * a22;
        te[ 6 ] = c * a13 + s * a23;

        te[ 1 ] = - s * a11 + c * a21;
        te[ 4 ] = - s * a12 + c * a22;
        te[ 7 ] = - s * a13 + c * a23;

        return this;

    },

    translate: function ( tx, ty ) {

        var te = this.elements;

        te[ 0 ] += tx * te[ 2 ]; te[ 3 ] += tx * te[ 5 ]; te[ 6 ] += tx * te[ 8 ];
        te[ 1 ] += ty * te[ 2 ]; te[ 4 ] += ty * te[ 5 ]; te[ 7 ] += ty * te[ 8 ];

        return this;

    },

    equals: function ( matrix ) {

        var te = this.elements;
        var me = matrix.elements;

        for ( var i = 0; i < 9; i ++ ) {

            if ( te[ i ] !== me[ i ] ) { return false; }

        }

        return true;

    },

    fromArray: function ( array, offset ) {

        if ( offset === undefined ) { offset = 0; }

        for ( var i = 0; i < 9; i ++ ) {

            this.elements[ i ] = array[ i + offset ];

        }

        return this;

    },

    toArray: function ( array, offset ) {

        if ( array === undefined ) { array = []; }
        if ( offset === undefined ) { offset = 0; }

        var te = this.elements;

        array[ offset ] = te[ 0 ];
        array[ offset + 1 ] = te[ 1 ];
        array[ offset + 2 ] = te[ 2 ];

        array[ offset + 3 ] = te[ 3 ];
        array[ offset + 4 ] = te[ 4 ];
        array[ offset + 5 ] = te[ 5 ];

        array[ offset + 6 ] = te[ 6 ];
        array[ offset + 7 ] = te[ 7 ];
        array[ offset + 8 ] = te[ 8 ];

        return array;

    }

} );

css_3d.matrix4 = function matrix4() {

    this.elements = [

        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1

    ];

    if ( arguments.length > 0 ) {

        console.error( 'THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.' );

    }

}
Object.assign( css_3d.matrix4.prototype, {

    isMatrix4: true,

    set: function ( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

        var te = this.elements;

        te[ 0 ] = n11; te[ 4 ] = n12; te[ 8 ] = n13; te[ 12 ] = n14;
        te[ 1 ] = n21; te[ 5 ] = n22; te[ 9 ] = n23; te[ 13 ] = n24;
        te[ 2 ] = n31; te[ 6 ] = n32; te[ 10 ] = n33; te[ 14 ] = n34;
        te[ 3 ] = n41; te[ 7 ] = n42; te[ 11 ] = n43; te[ 15 ] = n44;

        return this;

    },

    identity: function () {

        this.set(

            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1

        );

        return this;

    },

    clone: function () {

        return new Matrix4().fromArray( this.elements );

    },

    copy: function ( m ) {

        var te = this.elements;
        var me = m.elements;

        te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ]; te[ 3 ] = me[ 3 ];
        te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ]; te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ];
        te[ 8 ] = me[ 8 ]; te[ 9 ] = me[ 9 ]; te[ 10 ] = me[ 10 ]; te[ 11 ] = me[ 11 ];
        te[ 12 ] = me[ 12 ]; te[ 13 ] = me[ 13 ]; te[ 14 ] = me[ 14 ]; te[ 15 ] = me[ 15 ];

        return this;

    },

    copyPosition: function ( m ) {

        var te = this.elements, me = m.elements;

        te[ 12 ] = me[ 12 ];
        te[ 13 ] = me[ 13 ];
        te[ 14 ] = me[ 14 ];

        return this;

    },

    extractBasis: function ( xAxis, yAxis, zAxis ) {

        xAxis.setFromMatrixColumn( this, 0 );
        yAxis.setFromMatrixColumn( this, 1 );
        zAxis.setFromMatrixColumn( this, 2 );

        return this;

    },

    makeBasis: function ( xAxis, yAxis, zAxis ) {

        this.set(
            xAxis.x, yAxis.x, zAxis.x, 0,
            xAxis.y, yAxis.y, zAxis.y, 0,
            xAxis.z, yAxis.z, zAxis.z, 0,
            0, 0, 0, 1
        );

        return this;

    },

    extractRotation: function ( m ) {

        // this method does not support reflection matrices

        var te = this.elements;
        var me = m.elements;

        var scaleX = 1 / _v1.setFromMatrixColumn( m, 0 ).length();
        var scaleY = 1 / _v1.setFromMatrixColumn( m, 1 ).length();
        var scaleZ = 1 / _v1.setFromMatrixColumn( m, 2 ).length();

        te[ 0 ] = me[ 0 ] * scaleX;
        te[ 1 ] = me[ 1 ] * scaleX;
        te[ 2 ] = me[ 2 ] * scaleX;
        te[ 3 ] = 0;

        te[ 4 ] = me[ 4 ] * scaleY;
        te[ 5 ] = me[ 5 ] * scaleY;
        te[ 6 ] = me[ 6 ] * scaleY;
        te[ 7 ] = 0;

        te[ 8 ] = me[ 8 ] * scaleZ;
        te[ 9 ] = me[ 9 ] * scaleZ;
        te[ 10 ] = me[ 10 ] * scaleZ;
        te[ 11 ] = 0;

        te[ 12 ] = 0;
        te[ 13 ] = 0;
        te[ 14 ] = 0;
        te[ 15 ] = 1;

        return this;

    },

    makeRotationFromEuler: function ( euler ) {

        if ( ! ( euler && euler.isEuler ) ) {

            console.error( 'THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.' );

        }

        var te = this.elements;

        var x = euler.x, y = euler.y, z = euler.z;
        var a = Math.cos( x ), b = Math.sin( x );
        var c = Math.cos( y ), d = Math.sin( y );
        var e = Math.cos( z ), f = Math.sin( z );

        if ( euler.order === 'XYZ' ) {

            var ae = a * e, af = a * f, be = b * e, bf = b * f;

            te[ 0 ] = c * e;
            te[ 4 ] = - c * f;
            te[ 8 ] = d;

            te[ 1 ] = af + be * d;
            te[ 5 ] = ae - bf * d;
            te[ 9 ] = - b * c;

            te[ 2 ] = bf - ae * d;
            te[ 6 ] = be + af * d;
            te[ 10 ] = a * c;

        } else if ( euler.order === 'YXZ' ) {

            var ce = c * e, cf = c * f, de = d * e, df = d * f;

            te[ 0 ] = ce + df * b;
            te[ 4 ] = de * b - cf;
            te[ 8 ] = a * d;

            te[ 1 ] = a * f;
            te[ 5 ] = a * e;
            te[ 9 ] = - b;

            te[ 2 ] = cf * b - de;
            te[ 6 ] = df + ce * b;
            te[ 10 ] = a * c;

        } else if ( euler.order === 'ZXY' ) {

            var ce = c * e, cf = c * f, de = d * e, df = d * f;

            te[ 0 ] = ce - df * b;
            te[ 4 ] = - a * f;
            te[ 8 ] = de + cf * b;

            te[ 1 ] = cf + de * b;
            te[ 5 ] = a * e;
            te[ 9 ] = df - ce * b;

            te[ 2 ] = - a * d;
            te[ 6 ] = b;
            te[ 10 ] = a * c;

        } else if ( euler.order === 'ZYX' ) {

            var ae = a * e, af = a * f, be = b * e, bf = b * f;

            te[ 0 ] = c * e;
            te[ 4 ] = be * d - af;
            te[ 8 ] = ae * d + bf;

            te[ 1 ] = c * f;
            te[ 5 ] = bf * d + ae;
            te[ 9 ] = af * d - be;

            te[ 2 ] = - d;
            te[ 6 ] = b * c;
            te[ 10 ] = a * c;

        } else if ( euler.order === 'YZX' ) {

            var ac = a * c, ad = a * d, bc = b * c, bd = b * d;

            te[ 0 ] = c * e;
            te[ 4 ] = bd - ac * f;
            te[ 8 ] = bc * f + ad;

            te[ 1 ] = f;
            te[ 5 ] = a * e;
            te[ 9 ] = - b * e;

            te[ 2 ] = - d * e;
            te[ 6 ] = ad * f + bc;
            te[ 10 ] = ac - bd * f;

        } else if ( euler.order === 'XZY' ) {

            var ac = a * c, ad = a * d, bc = b * c, bd = b * d;

            te[ 0 ] = c * e;
            te[ 4 ] = - f;
            te[ 8 ] = d * e;

            te[ 1 ] = ac * f + bd;
            te[ 5 ] = a * e;
            te[ 9 ] = ad * f - bc;

            te[ 2 ] = bc * f - ad;
            te[ 6 ] = b * e;
            te[ 10 ] = bd * f + ac;

        }

        // bottom row
        te[ 3 ] = 0;
        te[ 7 ] = 0;
        te[ 11 ] = 0;

        // last column
        te[ 12 ] = 0;
        te[ 13 ] = 0;
        te[ 14 ] = 0;
        te[ 15 ] = 1;

        return this;

    },

    makeRotationFromQuaternion: function ( q ) {

        return this.compose( _zero, q, _one );

    },

    lookAt: function ( eye, target, up ) {

        var te = this.elements;

        _z.subVectors( eye, target );

        if ( _z.lengthSq() === 0 ) {

            // eye and target are in the same position

            _z.z = 1;

        }

        _z.normalize();
        _x.crossVectors( up, _z );

        if ( _x.lengthSq() === 0 ) {

            // up and z are parallel

            if ( Math.abs( up.z ) === 1 ) {

                _z.x += 0.0001;

            } else {

                _z.z += 0.0001;

            }

            _z.normalize();
            _x.crossVectors( up, _z );

        }

        _x.normalize();
        _y.crossVectors( _z, _x );

        te[ 0 ] = _x.x; te[ 4 ] = _y.x; te[ 8 ] = _z.x;
        te[ 1 ] = _x.y; te[ 5 ] = _y.y; te[ 9 ] = _z.y;
        te[ 2 ] = _x.z; te[ 6 ] = _y.z; te[ 10 ] = _z.z;

        return this;

    },

    multiply: function ( m, n ) {

        if ( n !== undefined ) {

            console.warn( 'THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.' );
            return this.multiplyMatrices( m, n );

        }

        return this.multiplyMatrices( this, m );

    },

    premultiply: function ( m ) {

        return this.multiplyMatrices( m, this );

    },

    multiplyMatrices: function ( a, b ) {

        var ae = a.elements;
        var be = b.elements;
        var te = this.elements;

        var a11 = ae[ 0 ], a12 = ae[ 4 ], a13 = ae[ 8 ], a14 = ae[ 12 ];
        var a21 = ae[ 1 ], a22 = ae[ 5 ], a23 = ae[ 9 ], a24 = ae[ 13 ];
        var a31 = ae[ 2 ], a32 = ae[ 6 ], a33 = ae[ 10 ], a34 = ae[ 14 ];
        var a41 = ae[ 3 ], a42 = ae[ 7 ], a43 = ae[ 11 ], a44 = ae[ 15 ];

        var b11 = be[ 0 ], b12 = be[ 4 ], b13 = be[ 8 ], b14 = be[ 12 ];
        var b21 = be[ 1 ], b22 = be[ 5 ], b23 = be[ 9 ], b24 = be[ 13 ];
        var b31 = be[ 2 ], b32 = be[ 6 ], b33 = be[ 10 ], b34 = be[ 14 ];
        var b41 = be[ 3 ], b42 = be[ 7 ], b43 = be[ 11 ], b44 = be[ 15 ];

        te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
        te[ 4 ] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
        te[ 8 ] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
        te[ 12 ] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

        te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
        te[ 5 ] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
        te[ 9 ] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
        te[ 13 ] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

        te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
        te[ 6 ] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
        te[ 10 ] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
        te[ 14 ] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

        te[ 3 ] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
        te[ 7 ] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
        te[ 11 ] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
        te[ 15 ] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

        return this;

    },

    multiplyScalar: function ( s ) {

        var te = this.elements;

        te[ 0 ] *= s; te[ 4 ] *= s; te[ 8 ] *= s; te[ 12 ] *= s;
        te[ 1 ] *= s; te[ 5 ] *= s; te[ 9 ] *= s; te[ 13 ] *= s;
        te[ 2 ] *= s; te[ 6 ] *= s; te[ 10 ] *= s; te[ 14 ] *= s;
        te[ 3 ] *= s; te[ 7 ] *= s; te[ 11 ] *= s; te[ 15 ] *= s;

        return this;

    },

    determinant: function () {

        var te = this.elements;

        var n11 = te[ 0 ], n12 = te[ 4 ], n13 = te[ 8 ], n14 = te[ 12 ];
        var n21 = te[ 1 ], n22 = te[ 5 ], n23 = te[ 9 ], n24 = te[ 13 ];
        var n31 = te[ 2 ], n32 = te[ 6 ], n33 = te[ 10 ], n34 = te[ 14 ];
        var n41 = te[ 3 ], n42 = te[ 7 ], n43 = te[ 11 ], n44 = te[ 15 ];

        //TODO: make this more efficient
        //( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

        return (
            n41 * (
                + n14 * n23 * n32
                 - n13 * n24 * n32
                 - n14 * n22 * n33
                 + n12 * n24 * n33
                 + n13 * n22 * n34
                 - n12 * n23 * n34
            ) +
            n42 * (
                + n11 * n23 * n34
                 - n11 * n24 * n33
                 + n14 * n21 * n33
                 - n13 * n21 * n34
                 + n13 * n24 * n31
                 - n14 * n23 * n31
            ) +
            n43 * (
                + n11 * n24 * n32
                 - n11 * n22 * n34
                 - n14 * n21 * n32
                 + n12 * n21 * n34
                 + n14 * n22 * n31
                 - n12 * n24 * n31
            ) +
            n44 * (
                - n13 * n22 * n31
                 - n11 * n23 * n32
                 + n11 * n22 * n33
                 + n13 * n21 * n32
                 - n12 * n21 * n33
                 + n12 * n23 * n31
            )

        );

    },

    transpose: function () {

        var te = this.elements;
        var tmp;

        tmp = te[ 1 ]; te[ 1 ] = te[ 4 ]; te[ 4 ] = tmp;
        tmp = te[ 2 ]; te[ 2 ] = te[ 8 ]; te[ 8 ] = tmp;
        tmp = te[ 6 ]; te[ 6 ] = te[ 9 ]; te[ 9 ] = tmp;

        tmp = te[ 3 ]; te[ 3 ] = te[ 12 ]; te[ 12 ] = tmp;
        tmp = te[ 7 ]; te[ 7 ] = te[ 13 ]; te[ 13 ] = tmp;
        tmp = te[ 11 ]; te[ 11 ] = te[ 14 ]; te[ 14 ] = tmp;

        return this;

    },

    setPosition: function ( x, y, z ) {

        var te = this.elements;

        if ( x.isVector3 ) {

            te[ 12 ] = x.x;
            te[ 13 ] = x.y;
            te[ 14 ] = x.z;

        } else {

            te[ 12 ] = x;
            te[ 13 ] = y;
            te[ 14 ] = z;

        }

        return this;

    },

    getInverse: function ( m, throwOnDegenerate ) {

        if ( throwOnDegenerate !== undefined ) {

            console.warn( "THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate." );

        }

        // based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
        var te = this.elements,
            me = m.elements,

            n11 = me[ 0 ], n21 = me[ 1 ], n31 = me[ 2 ], n41 = me[ 3 ],
            n12 = me[ 4 ], n22 = me[ 5 ], n32 = me[ 6 ], n42 = me[ 7 ],
            n13 = me[ 8 ], n23 = me[ 9 ], n33 = me[ 10 ], n43 = me[ 11 ],
            n14 = me[ 12 ], n24 = me[ 13 ], n34 = me[ 14 ], n44 = me[ 15 ],

            t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
            t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
            t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
            t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;

        var det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;

        if ( det === 0 ) { return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ); }

        var detInv = 1 / det;

        te[ 0 ] = t11 * detInv;
        te[ 1 ] = ( n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44 ) * detInv;
        te[ 2 ] = ( n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44 ) * detInv;
        te[ 3 ] = ( n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43 ) * detInv;

        te[ 4 ] = t12 * detInv;
        te[ 5 ] = ( n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44 ) * detInv;
        te[ 6 ] = ( n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44 ) * detInv;
        te[ 7 ] = ( n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43 ) * detInv;

        te[ 8 ] = t13 * detInv;
        te[ 9 ] = ( n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44 ) * detInv;
        te[ 10 ] = ( n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44 ) * detInv;
        te[ 11 ] = ( n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43 ) * detInv;

        te[ 12 ] = t14 * detInv;
        te[ 13 ] = ( n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34 ) * detInv;
        te[ 14 ] = ( n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34 ) * detInv;
        te[ 15 ] = ( n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33 ) * detInv;

        return this;

    },

    scale: function ( v ) {

        var te = this.elements;
        var x = v.x, y = v.y, z = v.z;

        te[ 0 ] *= x; te[ 4 ] *= y; te[ 8 ] *= z;
        te[ 1 ] *= x; te[ 5 ] *= y; te[ 9 ] *= z;
        te[ 2 ] *= x; te[ 6 ] *= y; te[ 10 ] *= z;
        te[ 3 ] *= x; te[ 7 ] *= y; te[ 11 ] *= z;

        return this;

    },

    getMaxScaleOnAxis: function () {

        var te = this.elements;

        var scaleXSq = te[ 0 ] * te[ 0 ] + te[ 1 ] * te[ 1 ] + te[ 2 ] * te[ 2 ];
        var scaleYSq = te[ 4 ] * te[ 4 ] + te[ 5 ] * te[ 5 ] + te[ 6 ] * te[ 6 ];
        var scaleZSq = te[ 8 ] * te[ 8 ] + te[ 9 ] * te[ 9 ] + te[ 10 ] * te[ 10 ];

        return Math.sqrt( Math.max( scaleXSq, scaleYSq, scaleZSq ) );

    },

    makeTranslation: function ( x, y, z ) {

        this.set(

            1, 0, 0, x,
            0, 1, 0, y,
            0, 0, 1, z,
            0, 0, 0, 1

        );

        return this;

    },

    makeRotationX: function ( theta ) {

        var c = Math.cos( theta ), s = Math.sin( theta );

        this.set(

            1, 0, 0, 0,
            0, c, - s, 0,
            0, s, c, 0,
            0, 0, 0, 1

        );

        return this;

    },

    makeRotationY: function ( theta ) {

        var c = Math.cos( theta ), s = Math.sin( theta );

        this.set(

             c, 0, s, 0,
             0, 1, 0, 0,
            - s, 0, c, 0,
             0, 0, 0, 1

        );

        return this;

    },

    makeRotationZ: function ( theta ) {

        var c = Math.cos( theta ), s = Math.sin( theta );

        this.set(

            c, - s, 0, 0,
            s, c, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1

        );

        return this;

    },

    makeRotationAxis: function ( axis, angle ) {

        // Based on http://www.gamedev.net/reference/articles/article1199.asp

        var c = Math.cos( angle );
        var s = Math.sin( angle );
        var t = 1 - c;
        var x = axis.x, y = axis.y, z = axis.z;
        var tx = t * x, ty = t * y;

        this.set(

            tx * x + c, tx * y - s * z, tx * z + s * y, 0,
            tx * y + s * z, ty * y + c, ty * z - s * x, 0,
            tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
            0, 0, 0, 1

        );

         return this;

    },

    makeScale: function ( x, y, z ) {

        this.set(

            x, 0, 0, 0,
            0, y, 0, 0,
            0, 0, z, 0,
            0, 0, 0, 1

        );

        return this;

    },

    makeShear: function ( x, y, z ) {

        this.set(

            1, y, z, 0,
            x, 1, z, 0,
            x, y, 1, 0,
            0, 0, 0, 1

        );

        return this;

    },

    compose: function ( position, quaternion, scale ) {

        var te = this.elements;

        var x = quaternion._x, y = quaternion._y, z = quaternion._z, w = quaternion._w;
        var x2 = x + x,	y2 = y + y, z2 = z + z;
        var xx = x * x2, xy = x * y2, xz = x * z2;
        var yy = y * y2, yz = y * z2, zz = z * z2;
        var wx = w * x2, wy = w * y2, wz = w * z2;

        var sx = scale.x, sy = scale.y, sz = scale.z;

        te[ 0 ] = ( 1 - ( yy + zz ) ) * sx;
        te[ 1 ] = ( xy + wz ) * sx;
        te[ 2 ] = ( xz - wy ) * sx;
        te[ 3 ] = 0;

        te[ 4 ] = ( xy - wz ) * sy;
        te[ 5 ] = ( 1 - ( xx + zz ) ) * sy;
        te[ 6 ] = ( yz + wx ) * sy;
        te[ 7 ] = 0;

        te[ 8 ] = ( xz + wy ) * sz;
        te[ 9 ] = ( yz - wx ) * sz;
        te[ 10 ] = ( 1 - ( xx + yy ) ) * sz;
        te[ 11 ] = 0;

        te[ 12 ] = position.x;
        te[ 13 ] = position.y;
        te[ 14 ] = position.z;
        te[ 15 ] = 1;

        return this;

    },

    decompose: function ( position, quaternion, scale ) {

        var te = this.elements;

        var sx = _v1.set( te[ 0 ], te[ 1 ], te[ 2 ] ).length();
        var sy = _v1.set( te[ 4 ], te[ 5 ], te[ 6 ] ).length();
        var sz = _v1.set( te[ 8 ], te[ 9 ], te[ 10 ] ).length();

        // if determine is negative, we need to invert one scale
        var det = this.determinant();
        if ( det < 0 ) { sx = - sx; }

        position.x = te[ 12 ];
        position.y = te[ 13 ];
        position.z = te[ 14 ];

        // scale the rotation part
        _m1.copy( this );

        var invSX = 1 / sx;
        var invSY = 1 / sy;
        var invSZ = 1 / sz;

        _m1.elements[ 0 ] *= invSX;
        _m1.elements[ 1 ] *= invSX;
        _m1.elements[ 2 ] *= invSX;

        _m1.elements[ 4 ] *= invSY;
        _m1.elements[ 5 ] *= invSY;
        _m1.elements[ 6 ] *= invSY;

        _m1.elements[ 8 ] *= invSZ;
        _m1.elements[ 9 ] *= invSZ;
        _m1.elements[ 10 ] *= invSZ;

        quaternion.setFromRotationMatrix( _m1 );

        scale.x = sx;
        scale.y = sy;
        scale.z = sz;

        return this;

    },

    makePerspective: function ( left, right, top, bottom, near, far ) {

        if ( far === undefined ) {

            console.warn( 'THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.' );

        }

        var te = this.elements;
        var x = 2 * near / ( right - left );
        var y = 2 * near / ( top - bottom );

        var a = ( right + left ) / ( right - left );
        var b = ( top + bottom ) / ( top - bottom );
        var c = - ( far + near ) / ( far - near );
        var d = - 2 * far * near / ( far - near );

        te[ 0 ] = x;	te[ 4 ] = 0;	te[ 8 ] = a;	te[ 12 ] = 0;
        te[ 1 ] = 0;	te[ 5 ] = y;	te[ 9 ] = b;	te[ 13 ] = 0;
        te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = c;	te[ 14 ] = d;
        te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = - 1;	te[ 15 ] = 0;

        return this;

    },

    makeOrthographic: function ( left, right, top, bottom, near, far ) {

        var te = this.elements;
        var w = 1.0 / ( right - left );
        var h = 1.0 / ( top - bottom );
        var p = 1.0 / ( far - near );

        var x = ( right + left ) * w;
        var y = ( top + bottom ) * h;
        var z = ( far + near ) * p;

        te[ 0 ] = 2 * w;	te[ 4 ] = 0;	te[ 8 ] = 0;	te[ 12 ] = - x;
        te[ 1 ] = 0;	te[ 5 ] = 2 * h;	te[ 9 ] = 0;	te[ 13 ] = - y;
        te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = - 2 * p;	te[ 14 ] = - z;
        te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = 0;	te[ 15 ] = 1;

        return this;

    },

    equals: function ( matrix ) {

        var te = this.elements;
        var me = matrix.elements;

        for ( var i = 0; i < 16; i ++ ) {

            if ( te[ i ] !== me[ i ] ) { return false; }

        }

        return true;

    },

    fromArray: function ( array, offset ) {

        if ( offset === undefined ) { offset = 0; }

        for ( var i = 0; i < 16; i ++ ) {

            this.elements[ i ] = array[ i + offset ];

        }

        return this;

    },

    toArray: function ( array, offset ) {

        if ( array === undefined ) { array = []; }
        if ( offset === undefined ) { offset = 0; }

        var te = this.elements;

        array[ offset ] = te[ 0 ];
        array[ offset + 1 ] = te[ 1 ];
        array[ offset + 2 ] = te[ 2 ];
        array[ offset + 3 ] = te[ 3 ];

        array[ offset + 4 ] = te[ 4 ];
        array[ offset + 5 ] = te[ 5 ];
        array[ offset + 6 ] = te[ 6 ];
        array[ offset + 7 ] = te[ 7 ];

        array[ offset + 8 ] = te[ 8 ];
        array[ offset + 9 ] = te[ 9 ];
        array[ offset + 10 ] = te[ 10 ];
        array[ offset + 11 ] = te[ 11 ];

        array[ offset + 12 ] = te[ 12 ];
        array[ offset + 13 ] = te[ 13 ];
        array[ offset + 14 ] = te[ 14 ];
        array[ offset + 15 ] = te[ 15 ];

        return array;

    }

} );

css_3d.quaternion = function quaternion( x, y, z, w ) {

    this._x = x || 0;
    this._y = y || 0;
    this._z = z || 0;
    this._w = ( w !== undefined ) ? w : 1;

}

Object.assign( css_3d.quaternion, {

    slerp: function ( qa, qb, qm, t ) {

        return qm.copy( qa ).slerp( qb, t );

    },

    slerpFlat: function ( dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t ) {

        // fuzz-free, array-based Quaternion SLERP operation

        var x0 = src0[ srcOffset0 + 0 ],
            y0 = src0[ srcOffset0 + 1 ],
            z0 = src0[ srcOffset0 + 2 ],
            w0 = src0[ srcOffset0 + 3 ],

            x1 = src1[ srcOffset1 + 0 ],
            y1 = src1[ srcOffset1 + 1 ],
            z1 = src1[ srcOffset1 + 2 ],
            w1 = src1[ srcOffset1 + 3 ];

        if ( w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1 ) {

            var s = 1 - t,

                cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,

                dir = ( cos >= 0 ? 1 : - 1 ),
                sqrSin = 1 - cos * cos;

            // Skip the Slerp for tiny steps to avoid numeric problems:
            if ( sqrSin > Number.EPSILON ) {

                var sin = Math.sqrt( sqrSin ),
                    len = Math.atan2( sin, cos * dir );

                s = Math.sin( s * len ) / sin;
                t = Math.sin( t * len ) / sin;

            }

            var tDir = t * dir;

            x0 = x0 * s + x1 * tDir;
            y0 = y0 * s + y1 * tDir;
            z0 = z0 * s + z1 * tDir;
            w0 = w0 * s + w1 * tDir;

            // Normalize in case we just did a lerp:
            if ( s === 1 - t ) {

                var f = 1 / Math.sqrt( x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0 );

                x0 *= f;
                y0 *= f;
                z0 *= f;
                w0 *= f;

            }

        }

        dst[ dstOffset ] = x0;
        dst[ dstOffset + 1 ] = y0;
        dst[ dstOffset + 2 ] = z0;
        dst[ dstOffset + 3 ] = w0;

    },

    multiplyQuaternionsFlat: function ( dst, dstOffset, src0, srcOffset0, src1, srcOffset1 ) {

        var x0 = src0[ srcOffset0 ];
        var y0 = src0[ srcOffset0 + 1 ];
        var z0 = src0[ srcOffset0 + 2 ];
        var w0 = src0[ srcOffset0 + 3 ];

        var x1 = src1[ srcOffset1 ];
        var y1 = src1[ srcOffset1 + 1 ];
        var z1 = src1[ srcOffset1 + 2 ];
        var w1 = src1[ srcOffset1 + 3 ];

        dst[ dstOffset ] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
        dst[ dstOffset + 1 ] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
        dst[ dstOffset + 2 ] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
        dst[ dstOffset + 3 ] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;

        return dst;

    }

} );

Object.defineProperties( css_3d.quaternion.prototype, {

    x: {

        get: function () {

            return this._x;

        },

        set: function ( value ) {

            this._x = value;
            this._onChangeCallback();

        }

    },

    y: {

        get: function () {

            return this._y;

        },

        set: function ( value ) {

            this._y = value;
            this._onChangeCallback();

        }

    },

    z: {

        get: function () {

            return this._z;

        },

        set: function ( value ) {

            this._z = value;
            this._onChangeCallback();

        }

    },

    w: {

        get: function () {

            return this._w;

        },

        set: function ( value ) {

            this._w = value;
            this._onChangeCallback();

        }

    }

} );

Object.assign( css_3d.quaternion.prototype, {

    isQuaternion: true,

    set: function ( x, y, z, w ) {

        this._x = x;
        this._y = y;
        this._z = z;
        this._w = w;

        this._onChangeCallback();

        return this;

    },

    clone: function () {

        return new this.constructor( this._x, this._y, this._z, this._w );

    },

    copy: function ( quaternion ) {

        this._x = quaternion.x;
        this._y = quaternion.y;
        this._z = quaternion.z;
        this._w = quaternion.w;

        this._onChangeCallback();

        return this;

    },

    setFromEuler: function ( euler, update ) {

        if ( ! ( euler && euler.isEuler ) ) {

            throw new Error( 'THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.' );

        }

        var x = euler._x, y = euler._y, z = euler._z, order = euler.order;

        // http://www.mathworks.com/matlabcentral/fileexchange/
        // 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
        //	content/SpinCalc.m

        var cos = Math.cos;
        var sin = Math.sin;

        var c1 = cos( x / 2 );
        var c2 = cos( y / 2 );
        var c3 = cos( z / 2 );

        var s1 = sin( x / 2 );
        var s2 = sin( y / 2 );
        var s3 = sin( z / 2 );

        switch ( order ) {

            case 'XYZ':
                this._x = s1 * c2 * c3 + c1 * s2 * s3;
                this._y = c1 * s2 * c3 - s1 * c2 * s3;
                this._z = c1 * c2 * s3 + s1 * s2 * c3;
                this._w = c1 * c2 * c3 - s1 * s2 * s3;
                break;

            case 'YXZ':
                this._x = s1 * c2 * c3 + c1 * s2 * s3;
                this._y = c1 * s2 * c3 - s1 * c2 * s3;
                this._z = c1 * c2 * s3 - s1 * s2 * c3;
                this._w = c1 * c2 * c3 + s1 * s2 * s3;
                break;

            case 'ZXY':
                this._x = s1 * c2 * c3 - c1 * s2 * s3;
                this._y = c1 * s2 * c3 + s1 * c2 * s3;
                this._z = c1 * c2 * s3 + s1 * s2 * c3;
                this._w = c1 * c2 * c3 - s1 * s2 * s3;
                break;

            case 'ZYX':
                this._x = s1 * c2 * c3 - c1 * s2 * s3;
                this._y = c1 * s2 * c3 + s1 * c2 * s3;
                this._z = c1 * c2 * s3 - s1 * s2 * c3;
                this._w = c1 * c2 * c3 + s1 * s2 * s3;
                break;

            case 'YZX':
                this._x = s1 * c2 * c3 + c1 * s2 * s3;
                this._y = c1 * s2 * c3 + s1 * c2 * s3;
                this._z = c1 * c2 * s3 - s1 * s2 * c3;
                this._w = c1 * c2 * c3 - s1 * s2 * s3;
                break;

            case 'XZY':
                this._x = s1 * c2 * c3 - c1 * s2 * s3;
                this._y = c1 * s2 * c3 - s1 * c2 * s3;
                this._z = c1 * c2 * s3 + s1 * s2 * c3;
                this._w = c1 * c2 * c3 + s1 * s2 * s3;
                break;

            default:
                console.warn( 'THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + order );

        }

        if ( update !== false ) { this._onChangeCallback(); }

        return this;

    },

    setFromAxisAngle: function ( axis, angle ) {

        // http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

        // assumes axis is normalized

        var halfAngle = angle / 2, s = Math.sin( halfAngle );

        this._x = axis.x * s;
        this._y = axis.y * s;
        this._z = axis.z * s;
        this._w = Math.cos( halfAngle );

        this._onChangeCallback();

        return this;

    },

    setFromRotationMatrix: function ( m ) {

        // http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

        // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

        var te = m.elements,

            m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
            m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
            m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ],

            trace = m11 + m22 + m33,
            s;

        if ( trace > 0 ) {

            s = 0.5 / Math.sqrt( trace + 1.0 );

            this._w = 0.25 / s;
            this._x = ( m32 - m23 ) * s;
            this._y = ( m13 - m31 ) * s;
            this._z = ( m21 - m12 ) * s;

        } else if ( m11 > m22 && m11 > m33 ) {

            s = 2.0 * Math.sqrt( 1.0 + m11 - m22 - m33 );

            this._w = ( m32 - m23 ) / s;
            this._x = 0.25 * s;
            this._y = ( m12 + m21 ) / s;
            this._z = ( m13 + m31 ) / s;

        } else if ( m22 > m33 ) {

            s = 2.0 * Math.sqrt( 1.0 + m22 - m11 - m33 );

            this._w = ( m13 - m31 ) / s;
            this._x = ( m12 + m21 ) / s;
            this._y = 0.25 * s;
            this._z = ( m23 + m32 ) / s;

        } else {

            s = 2.0 * Math.sqrt( 1.0 + m33 - m11 - m22 );

            this._w = ( m21 - m12 ) / s;
            this._x = ( m13 + m31 ) / s;
            this._y = ( m23 + m32 ) / s;
            this._z = 0.25 * s;

        }

        this._onChangeCallback();

        return this;

    },

    setFromUnitVectors: function ( vFrom, vTo ) {

        // assumes direction vectors vFrom and vTo are normalized

        var EPS = 0.000001;

        var r = vFrom.dot( vTo ) + 1;

        if ( r < EPS ) {

            r = 0;

            if ( Math.abs( vFrom.x ) > Math.abs( vFrom.z ) ) {

                this._x = - vFrom.y;
                this._y = vFrom.x;
                this._z = 0;
                this._w = r;

            } else {

                this._x = 0;
                this._y = - vFrom.z;
                this._z = vFrom.y;
                this._w = r;

            }

        } else {

            // crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3

            this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
            this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
            this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
            this._w = r;

        }

        return this.normalize();

    },

    angleTo: function ( q ) {

        return 2 * Math.acos( Math.abs( MathUtils.clamp( this.dot( q ), - 1, 1 ) ) );

    },

    rotateTowards: function ( q, step ) {

        var angle = this.angleTo( q );

        if ( angle === 0 ) { return this; }

        var t = Math.min( 1, step / angle );

        this.slerp( q, t );

        return this;

    },

    inverse: function () {

        // quaternion is assumed to have unit length

        return this.conjugate();

    },

    conjugate: function () {

        this._x *= - 1;
        this._y *= - 1;
        this._z *= - 1;

        this._onChangeCallback();

        return this;

    },

    dot: function ( v ) {

        return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;

    },

    lengthSq: function () {

        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;

    },

    length: function () {

        return Math.sqrt( this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w );

    },

    normalize: function () {

        var l = this.length();

        if ( l === 0 ) {

            this._x = 0;
            this._y = 0;
            this._z = 0;
            this._w = 1;

        } else {

            l = 1 / l;

            this._x = this._x * l;
            this._y = this._y * l;
            this._z = this._z * l;
            this._w = this._w * l;

        }

        this._onChangeCallback();

        return this;

    },

    multiply: function ( q, p ) {

        if ( p !== undefined ) {

            console.warn( 'THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.' );
            return this.multiplyQuaternions( q, p );

        }

        return this.multiplyQuaternions( this, q );

    },

    premultiply: function ( q ) {

        return this.multiplyQuaternions( q, this );

    },

    multiplyQuaternions: function ( a, b ) {

        // from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

        var qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
        var qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;

        this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
        this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
        this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
        this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

        this._onChangeCallback();

        return this;

    },

    slerp: function ( qb, t ) {

        if ( t === 0 ) { return this; }
        if ( t === 1 ) { return this.copy( qb ); }

        var x = this._x, y = this._y, z = this._z, w = this._w;

        // http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

        var cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

        if ( cosHalfTheta < 0 ) {

            this._w = - qb._w;
            this._x = - qb._x;
            this._y = - qb._y;
            this._z = - qb._z;

            cosHalfTheta = - cosHalfTheta;

        } else {

            this.copy( qb );

        }

        if ( cosHalfTheta >= 1.0 ) {

            this._w = w;
            this._x = x;
            this._y = y;
            this._z = z;

            return this;

        }

        var sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;

        if ( sqrSinHalfTheta <= Number.EPSILON ) {

            var s = 1 - t;
            this._w = s * w + t * this._w;
            this._x = s * x + t * this._x;
            this._y = s * y + t * this._y;
            this._z = s * z + t * this._z;

            this.normalize();
            this._onChangeCallback();

            return this;

        }

        var sinHalfTheta = Math.sqrt( sqrSinHalfTheta );
        var halfTheta = Math.atan2( sinHalfTheta, cosHalfTheta );
        var ratioA = Math.sin( ( 1 - t ) * halfTheta ) / sinHalfTheta,
            ratioB = Math.sin( t * halfTheta ) / sinHalfTheta;

        this._w = ( w * ratioA + this._w * ratioB );
        this._x = ( x * ratioA + this._x * ratioB );
        this._y = ( y * ratioA + this._y * ratioB );
        this._z = ( z * ratioA + this._z * ratioB );

        this._onChangeCallback();

        return this;

    },

    equals: function ( quaternion ) {

        return ( quaternion._x === this._x ) && ( quaternion._y === this._y ) && ( quaternion._z === this._z ) && ( quaternion._w === this._w );

    },

    fromArray: function ( array, offset ) {

        if ( offset === undefined ) { offset = 0; }

        this._x = array[ offset ];
        this._y = array[ offset + 1 ];
        this._z = array[ offset + 2 ];
        this._w = array[ offset + 3 ];

        this._onChangeCallback();

        return this;

    },

    toArray: function ( array, offset ) {

        if ( array === undefined ) { array = []; }
        if ( offset === undefined ) { offset = 0; }

        array[ offset ] = this._x;
        array[ offset + 1 ] = this._y;
        array[ offset + 2 ] = this._z;
        array[ offset + 3 ] = this._w;

        return array;

    },

    fromBufferAttribute: function ( attribute, index ) {

        this._x = attribute.getX( index );
        this._y = attribute.getY( index );
        this._z = attribute.getZ( index );
        this._w = attribute.getW( index );

        return this;

    },

    _onChange: function ( callback ) {

        this._onChangeCallback = callback;

        return this;

    },

    _onChangeCallback: function () {}

} );

css_3d.euler = function euler( x, y, z, order ) {

    this._x = x || 0;
    this._y = y || 0;
    this._z = z || 0;
    this._order = order || css_3d.euler.DefaultOrder;

}

css_3d.euler.RotationOrders = [ 'XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX' ];

css_3d.euler.DefaultOrder = 'XYZ';

Object.defineProperties( css_3d.euler.prototype, {

    x: {

        get: function () {

            return this._x;

        },

        set: function ( value ) {

            this._x = value;
            this._onChangeCallback();

        }

    },

    y: {

        get: function () {

            return this._y;

        },

        set: function ( value ) {

            this._y = value;
            this._onChangeCallback();

        }

    },

    z: {

        get: function () {

            return this._z;

        },

        set: function ( value ) {

            this._z = value;
            this._onChangeCallback();

        }

    },

    order: {

        get: function () {

            return this._order;

        },

        set: function ( value ) {

            this._order = value;
            this._onChangeCallback();

        }

    }

} );

Object.assign( css_3d.euler.prototype, {

    isEuler: true,

    set: function ( x, y, z, order ) {

        this._x = x;
        this._y = y;
        this._z = z;
        this._order = order || this._order;

        this._onChangeCallback();

        return this;

    },

    clone: function () {

        return new this.constructor( this._x, this._y, this._z, this._order );

    },

    copy: function ( euler ) {

        this._x = euler._x;
        this._y = euler._y;
        this._z = euler._z;
        this._order = euler._order;

        this._onChangeCallback();

        return this;

    },

    setFromRotationMatrix: function ( m, order, update ) {

        var clamp = MathUtils.clamp;

        // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

        var te = m.elements;
        var m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ];
        var m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ];
        var m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

        order = order || this._order;

        switch ( order ) {

            case 'XYZ':

                this._y = Math.asin( clamp( m13, - 1, 1 ) );

                if ( Math.abs( m13 ) < 0.9999999 ) {

                    this._x = Math.atan2( - m23, m33 );
                    this._z = Math.atan2( - m12, m11 );

                } else {

                    this._x = Math.atan2( m32, m22 );
                    this._z = 0;

                }

                break;

            case 'YXZ':

                this._x = Math.asin( - clamp( m23, - 1, 1 ) );

                if ( Math.abs( m23 ) < 0.9999999 ) {

                    this._y = Math.atan2( m13, m33 );
                    this._z = Math.atan2( m21, m22 );

                } else {

                    this._y = Math.atan2( - m31, m11 );
                    this._z = 0;

                }

                break;

            case 'ZXY':

                this._x = Math.asin( clamp( m32, - 1, 1 ) );

                if ( Math.abs( m32 ) < 0.9999999 ) {

                    this._y = Math.atan2( - m31, m33 );
                    this._z = Math.atan2( - m12, m22 );

                } else {

                    this._y = 0;
                    this._z = Math.atan2( m21, m11 );

                }

                break;

            case 'ZYX':

                this._y = Math.asin( - clamp( m31, - 1, 1 ) );

                if ( Math.abs( m31 ) < 0.9999999 ) {

                    this._x = Math.atan2( m32, m33 );
                    this._z = Math.atan2( m21, m11 );

                } else {

                    this._x = 0;
                    this._z = Math.atan2( - m12, m22 );

                }

                break;

            case 'YZX':

                this._z = Math.asin( clamp( m21, - 1, 1 ) );

                if ( Math.abs( m21 ) < 0.9999999 ) {

                    this._x = Math.atan2( - m23, m22 );
                    this._y = Math.atan2( - m31, m11 );

                } else {

                    this._x = 0;
                    this._y = Math.atan2( m13, m33 );

                }

                break;

            case 'XZY':

                this._z = Math.asin( - clamp( m12, - 1, 1 ) );

                if ( Math.abs( m12 ) < 0.9999999 ) {

                    this._x = Math.atan2( m32, m22 );
                    this._y = Math.atan2( m13, m11 );

                } else {

                    this._x = Math.atan2( - m23, m33 );
                    this._y = 0;

                }

                break;

            default:

                console.warn( 'THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + order );

        }

        this._order = order;

        if ( update !== false ) { this._onChangeCallback(); }

        return this;

    },

    setFromQuaternion: function ( q, order, update ) {

        _matrix.makeRotationFromQuaternion( q );

        return this.setFromRotationMatrix( _matrix, order, update );

    },

    setFromVector3: function ( v, order ) {

        return this.set( v.x, v.y, v.z, order || this._order );

    },

    reorder: function ( newOrder ) {

        // WARNING: this discards revolution information -bhouston

        _quaternion$1.setFromEuler( this );

        return this.setFromQuaternion( _quaternion$1, newOrder );

    },

    equals: function ( euler ) {

        return ( euler._x === this._x ) && ( euler._y === this._y ) && ( euler._z === this._z ) && ( euler._order === this._order );

    },

    fromArray: function ( array ) {

        this._x = array[ 0 ];
        this._y = array[ 1 ];
        this._z = array[ 2 ];
        if ( array[ 3 ] !== undefined ) { this._order = array[ 3 ]; }

        this._onChangeCallback();

        return this;

    },

    toArray: function ( array, offset ) {

        if ( array === undefined ) { array = []; }
        if ( offset === undefined ) { offset = 0; }

        array[ offset ] = this._x;
        array[ offset + 1 ] = this._y;
        array[ offset + 2 ] = this._z;
        array[ offset + 3 ] = this._order;

        return array;

    },

    toVector3: function ( optionalResult ) {

        if ( optionalResult ) {

            return optionalResult.set( this._x, this._y, this._z );

        } else {

            return new Vector3( this._x, this._y, this._z );

        }

    },

    _onChange: function ( callback ) {

        this._onChangeCallback = callback;

        return this;

    },

    _onChangeCallback: function () {}

} );

css_3d.spherical = function spherical( radius, phi, theta ) {

    this.radius = ( radius !== undefined ) ? radius : 1.0;
    this.phi = ( phi !== undefined ) ? phi : 0; // polar angle
    this.theta = ( theta !== undefined ) ? theta : 0; // azimuthal angle

    return this;

}

Object.assign( css_3d.spherical.prototype, {

    set: function ( radius, phi, theta ) {

        this.radius = radius;
        this.phi = phi;
        this.theta = theta;

        return this;

    },

    clone: function () {

        return new this.constructor().copy( this );

    },

    copy: function ( other ) {

        this.radius = other.radius;
        this.phi = other.phi;
        this.theta = other.theta;

        return this;

    },

    // restrict phi to be betwee EPS and PI-EPS
    makeSafe: function () {

        var EPS = 0.000001;
        this.phi = Math.max( EPS, Math.min( Math.PI - EPS, this.phi ) );

        return this;

    },

    setFromVector3: function ( v ) {

        return this.setFromCartesianCoords( v.x, v.y, v.z );

    },

    setFromCartesianCoords: function ( x, y, z ) {

        this.radius = Math.sqrt( x * x + y * y + z * z );

        if ( this.radius === 0 ) {

            this.theta = 0;
            this.phi = 0;

        } else {

            this.theta = Math.atan2( x, z );
            this.phi = Math.acos( MathUtils.clamp( y / this.radius, - 1, 1 ) );

        }

        return this;

    }

} );

css_3d.radianToDegree = function(rad){
    return rad * 180 / Math.PI;
}
css_3d.degreeToRadian = function(rad){
    return rad * Math.PI / 180;
}

css_3d.EventDispatcher = function(){
    this._listeners = {};
}
css_3d.EventDispatcher.prototype = {
    addEventListener: function ( type, listener ) {
        if ( this._listeners === undefined ) { this._listeners = {}; }
        var listeners = this._listeners;
        if ( listeners[ type ] === undefined ) {
            listeners[ type ] = [];
        }
        if ( listeners[ type ].indexOf( listener ) === - 1 ) {
            listeners[ type ].push( listener );
        }
    },

    hasEventListener: function ( type, listener ) {
        if ( this._listeners === undefined ) { return false; }
        var listeners = this._listeners;
        return listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== - 1;
    },

    removeEventListener: function ( type, listener ) {
        if ( this._listeners === undefined ) { return; }
        var listeners = this._listeners;
        var listenerArray = listeners[ type ];
        if ( listenerArray !== undefined ) {
            var index = listenerArray.indexOf( listener );
            if ( index !== - 1 ) {
                listenerArray.splice( index, 1 );
            }
        }
    },

    dispatchEvent: function ( event ) {

        if ( this._listeners === undefined ) { return; }
        var listeners = this._listeners;
        var listenerArray = listeners[ event.type ];
        if ( listenerArray !== undefined ) {
            event.target = this;
            // Make a copy, in case listeners are removed while iterating.
            var array = listenerArray.slice( 0 );
            for ( var i = 0, l = array.length; i < l; i ++ ) {
                array[ i ].call( this, event );
            }
        }
    },
    destroy : function(){
        this._listeners = [];
    }
}
css_3d.uuid4 = function uuid4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
css_3d.Obj = function Obj(targetHTMLTag, options){
    css_3d.EventDispatcher.call(this);
    this.id = css_3d.uuid4();
    this.target = targetHTMLTag;
    Object.assign(this.target.style, Object.assign({
        position : "absolute",
        transformStyle : "preserve-3d",
    }, options))

    this.name = null;
    this.position = new css_3d.vector3(0, 0, 0);
    this.rotation = new css_3d.vector3(0, 0, 0);
    this.scale = new css_3d.vector3(1, 1, 1);
    this.parent = null;
    this.children = [];
}
css_3d.Obj.prototype = Object.create(css_3d.EventDispatcher.prototype);
css_3d.Obj.prototype.constructor = css_3d.Obj;
Object.assign(css_3d.Obj.prototype, {
    addChild : function(obj){
        if(obj.parent) {
            delete obj.parent.children[obj.id]
            const o = obj.parent.children.some(function(c, i){ 
                if(c.id === obj.id) obj.parent.children.splice(i, 1);
                return c.id === obj.id
            })            
        };
        this.children.push(obj);
        this.children[obj.id] = obj;
        obj.parent = this;
        this.target.appendChild(obj.target);        
    },
    destroy : function(){
        css_3d.EventDispatcher.prototype.destroy.apply(this);
        this.target.remove();
        this.target = null;
        this.parent = null;
        this.id = null;
        this.name = null;
        this.position = null;
        this.rotation = null;
        this.scale = null;
        this.children.forEach(function(c){ 
            c.destroy() 
        })
        this.children = null;
    },
    update : function(){
        Object.assign(this.target.style, {
            transform : 
            "translate3d(" + (this.position.x) + "px," + (this.position.y) + "px," + (this.position.z) + "px)" +
            "scale3d(" + this.scale.x + "," + this.scale.y + "," + this.scale.z + ") " +
            "rotateX(" + this.rotation.x + "deg) " +
            "rotateY(" +  this.rotation.y + "deg) " + 
            "rotateZ(" + this.rotation.z + "deg) "        
        })
    }
})

css_3d.Observer = function(perspective, rotateOffset){
    css_3d.EventDispatcher.apply(this);
    this.target = document.createElement("div");
    Object.assign(this.target.style, {
        width : "100%",
        height : "100%",
        transformStyle : "preserve-3d",
        position : "absolute"        
    })    
    this.perspective = perspective;
    this.position = new css_3d.vector3(0, 0, 0);
    this.scale = new css_3d.vector3(1, 1, 1);
    this.rotation = new css_3d.vector3(0, 0, 0);
    this.rotateOffset = rotateOffset;
    this.enabled = true;   

}
css_3d.Observer.prototype = Object.create(css_3d.EventDispatcher.prototype);
css_3d.Observer.prototype.constructor = css_3d.Observer;
Object.assign(css_3d.Observer.prototype, {
    destroy : function(){
        this.target.remove();
        this.target = null;
        this.perspective = null;
        this.position = null;
        this.scale = null;
        this.rotation = null;
        this.rotateOffset = null;
    },
    initEventListener : function(world){
        //context block
        world.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        }, false);
        world.addEventListener('mousedown', function(e){
            if(e.button === 0) {
                this.mode = 'rotate'
            }
            else if(e.button === 2) this.mode = 'pan'                        
        }.bind(this))

        world.addEventListener('mousemove', function(e){
            if(this.enabled){
                if(this.mode === 'pan'){
                    // this.position.x = this.position.x - e.movementX;
                    // this.position.y = this.position.y - e.movementY;
                }else if(this.mode ==='rotate'){
                    this.rotation.x = this.rotation.x - e.movementY * 0.3;
                    this.rotation.y = this.rotation.y + e.movementX * 0.3;                    
                }
                if(this.mode){
                    this.dispatchEvent({type : 'change'});
                }            
            }            
        }.bind(this));  

        world.addEventListener('mouseup', function(e){
            this.mode = null;
            this.dispatchEvent({type : 'change'});
        }.bind(this))

        world.addEventListener('wheel', function(e){
            if(this.enabled){
                this.rotateOffset +=  e.deltaY ;
                this.dispatchEvent({type : 'change'});
            }                        
        }.bind(this))
    }
})


css_3d.World = function(options){    
    css_3d.Obj.apply(this, [document.createElement('div'), options])
    Object.assign(this.target.style, {
        width : "100%",
        height : "100%",
        transformStyle : "preserve-3d",
        top : "50%",
        left : "50%",
    })
}
css_3d.World.prototype = Object.create(css_3d.Obj.prototype);
css_3d.World.prototype.constructor = css_3d.World;
Object.assign(css_3d.World.prototype, {
    update : function(obj){
        if(obj === undefined || obj === null){
            if(this.children.length > 0){
                for(let i = 0; i < this.children.length; i++){
                    this.update(this.children[i]);
                }
            }
        }else{
            if(obj.children.length > 0){
                obj.update();
                for(let i = 0; i < obj.children.length; i++){
                    this.update(obj.children[i])
                }
            }else{                         
                obj.update();
                return;
            }
        }           
    }
})

css_3d.Universe = function(targetHTMLTag, options){    
    if(arguments.length == 0) {
        console.error("Universe constructor needs html tag")
        return null;
    }else if(arguments.length === 1){
        options = {};
    }
    this.targetID = targetHTMLTag.id;
    this.viewport = document.createElement('div');
    this.viewport.id = this.targetID + '_viewport' //test
    
    //viewport basic style
    Object.assign(this.viewport.style, {
        display: "flex",
        width : "100%",
        height : "100%",
        position : "absolute",
        alignItems: "center",
        justifyContent: "center",
        overflow : 'hidden', //https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
        margin: 0,
        padding: 0,
    })   
    targetHTMLTag.appendChild(this.viewport);

    this.observer = null;
    this.world = null;
}
css_3d.Universe.prototype = {
    update : function(){
        if(this.observer && this.world){
            //viewport update
            Object.assign(this.viewport.style, {
                perspective : this.observer.perspective + "px"
            })
            //camera update
            Object.assign(this.observer.target.style, {
                transform : 
                "scale3d(" + this.observer.scale.x + "," + this.observer.scale.y + "," + this.observer.scale.z + ") " +
                "translateZ(" + (this.observer.perspective - this.observer.rotateOffset) + "px) " +
                "rotateX(" + this.observer.rotation.x + "deg) " +
                "rotateY(" +  this.observer.rotation.y + "deg) " + 
                "rotateZ(" + this.observer.rotation.z + "deg) "        
            })
            //world update
            Object.assign(this.world.target.style, {
                transform : 
                "translate3d(" + (-this.observer.position.x) + "px," + (-this.observer.position.y) + "px," + (-this.observer.position.z) + "px)"
            })

            this.world.update();
        }        
    },
    addObserver : function(observer){        
        this.observer = observer;
        this.observer.target.id = this.targetID + '_observer';
        this.viewport.appendChild(this.observer.target);        
    },
    createWorld : function(world){
        this.world = world;
        this.world.target.id = this.targetID + '_world';
        this.observer.target.appendChild(world.target)
    },
    destroy : function(){
        this.observer.destroy();
        this.observer = null;
        this.world.destroy();
        this.world = null;
        this.viewport.remove();
        this.viewport = null;
        this.targetID = null;
    }
}
css_3d.Group = function Group(){
    css_3d.Obj.apply(this, [document.createElement('div'), null])
    this.target.className = "group"
}
css_3d.Group.prototype = Object.create(css_3d.Obj.prototype);
css_3d.Group.prototype.constructor = css_3d.Group;
Object.assign(css_3d.Group.prototype, {
    update : function(){
        css_3d.Obj.prototype.update.apply(this);
        for(let i = 0; i < this.children.length; i++){
            this.children[i].update();
        }
    }
});


css_3d.Plane = function Plane(width, height, options){
    css_3d.Obj.apply(this, [document.createElement('div'), options])
    this.target.className = "plane"
    Object.assign(this.target.style, {
        width : width + "px",
        height : height + "px"
    })
    this.width = width;
    this.height = height;
}
css_3d.Plane.prototype = Object.create(css_3d.Obj.prototype);
css_3d.Plane.prototype.constructor = css_3d.Plane;
Object.assign(css_3d.Plane.prototype, {
    update : function(){
        Object.assign(this.target.style, {
            width : this.width + "px",
            height : this.height + "px"
        })
        Object.assign(this.target.style, {
            transform : 
            "translate3d(" + (this.position.x - (this.width / 2)) + "px," + (this.position.y - (this.height / 2)) + "px," + (this.position.z) + "px)" +
            "scale3d(" + this.scale.x + "," + this.scale.y + "," + this.scale.z + ") " +
            "rotateX(" + this.rotation.x + "deg) " +
            "rotateY(" +  this.rotation.y + "deg) " + 
            "rotateZ(" + this.rotation.z + "deg) "        
        })  
    }
})

css_3d.Box = function Box(width, height, depth, options){    
    css_3d.Obj.apply(this, [document.createElement('div'), options])
    this.target.className = "box"
    const group = new css_3d.Group();

    const front = new css_3d.Plane(width, height, {
        border : "1px dashed red",
    })    
    front.position.z += (depth / 2);
    
    const back = new css_3d.Plane(width, height, {
        border : "1px dashed red",
    })
    back.position.z -= (depth / 2);
    

    const left = new css_3d.Plane(depth, height, {
        border : "1px dashed blue",        
    })
    left.position.x -= (width / 2);    
    left.rotation.y += 90;
    

    const right = new css_3d.Plane(depth, height, {
        border : "1px dashed blue",        
    })
    right.position.x += (width / 2);    
    right.rotation.y += 90;
    

    const top = new css_3d.Plane(width, depth, {
        border : "1px dashed green",        
    })
    top.rotation.x += 90;
    top.position.y -= (height / 2);

    const bottom = new css_3d.Plane(width, depth, {
        border : "1px dashed green",        
    })
    bottom.rotation.x += 90;
    bottom.position.y += (height / 2);

    group.addChild(front);    
    group.addChild(back);
    group.addChild(left);
    group.addChild(right);
    group.addChild(top);
    group.addChild(bottom);
    this.addChild(group);
}
css_3d.Box.prototype = Object.create(css_3d.Obj.prototype);
css_3d.Box.prototype.constructor = css_3d.Box;