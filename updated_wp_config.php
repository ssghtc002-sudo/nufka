<?php
define( 'WP_CACHE', true ); // Added by WP Rocket

define( 'WP_CACHE', false /* Modified by NitroPack */ ); // Added by WP Rocket

define( 'WP_CACHE', true /* Modified by NitroPack */ ); // Added by WP Rocket


define('FS_METHOD', 'direct');
define('FORCE_SSL_ADMIN', true);

// Fix REST API Authorization Header for Application Passwords
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] = $_SERVER['HTTP_AUTHORIZATION'];
} else if (isset($_SERVER['REDIRECT_HTTP_AUTHORIZATION'])) {
    $_SERVER['HTTP_AUTHORIZATION'] = $_SERVER['REDIRECT_HTTP_AUTHORIZATION'];
}

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dbs11592133' );

/** Database username */
define( 'DB_USER', 'dbu909872' );

/** Database password */
define( 'DB_PASSWORD', 'GtgPSZfdqrCtxXaCsugN' );

/** Database hostname */
define( 'DB_HOST', 'db5013860299.hosting-data.io' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '^Y.EmcNN;%Sz4?z7TW6>b*t71-5mqEd|Q@[J?Ql0S/BE%_{X?*5p(ImM?~+Y0(wn' );
define( 'SECURE_AUTH_KEY',   'NQTW%jw`3P:u9@J^D4>Na{Q~O0%)eBrVN.P<~-9cj >}QvEVo_#$z,S.B_6L?(<1' );
define( 'LOGGED_IN_KEY',     'YO YC]VlL{WnL-2zD.i+-{}gVV,##b<6N-#?}%,Xfh@Na!Ny6: Qr:Z@@;_S#m,c' );
define( 'NONCE_KEY',         'Zr jd(`*+dr8G/~^;hv15h6} NEtGHH#gcm5690LlyAn)#g8wF*/rt+HK!P>LxcJ' );
define( 'AUTH_SALT',         'A?.W-b|Q[]1&l)gzIQYIluq8!.D($m-nfT(lyq$b_Lj}#@sK(`6RYZb:$qDr@UbR' );
define( 'SECURE_AUTH_SALT',  'l@<W#gg#F/=F~LmM$tz[>6El*[DAB[`U.P?C~$2rulxGZ@A:>Rq^%~SH}asv* 4m' );
define( 'LOGGED_IN_SALT',    '$ xTMQr%LVwgZoSiauE77V7)C->>#_C%^20H-T5^+/>D)DY*I|BGxu8V^b6ZJ;GW' );
define( 'NONCE_SALT',        'j?GZ/U>pf %Nz#=SEZ,, 2Efo5|3BYgYWa)7h]c3Ad^B3[mU0f&JS86nT!P_byqZ' );
define( 'WP_CACHE_KEY_SALT', '&Kw/L/>DF&?als?r7yEQP?Yq>dE!tJ@wYa?ML7Hx S$Ma7[FYuu]]NPg%Ldl8@O>' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'REuLEiCq';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

set_time_limit(300);

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
