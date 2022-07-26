<?php
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
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_rest_api' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define('JWT_AUTH_SECRET_KEY', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NTg2Nzk5NzEsImV4cCI6MTgxNjM1OTk3MX0.2zn5cvPlmvlUfhjwL6crstrLnj7ADgwVCs1FK70tIIk');
define('JWT_AUTH_CORS_ENABLE', true);
define( 'AUTH_KEY',         'ml]H0j/ZSG5TpGO[=/gEx1(>$N:f;,7P6YXy,KT8p[I[DIzau+0R^<K>nc{L r0]' );
define( 'SECURE_AUTH_KEY',  'R?o7n^_2^N` ),]~arUHkw+(p!|.[hdFtN^!CP>ggez>-}A-_%4{5-.!f`^OEWev' );
define( 'LOGGED_IN_KEY',    '3*[vxg^w036K,aszB!>s@k:pycf2hb-IUI@}@V&,g:=G8!ETt_MKOkHCHK+63Bm?' );
define( 'NONCE_KEY',        'EPT&&}bR5f#i+ab^=p}DHG_v.t?ltJ{:&nqxZ1F%B^:LTr6$*`FL3dzJbTGr%KBQ' );
define( 'AUTH_SALT',        'h.{mw<TkprV8K:~(4.J:xT_ j=x[S|$yIgj&8Cl/Tr/ObcFDC-lntX5ls%} @T!v' );
define( 'SECURE_AUTH_SALT', '0E^#V3GrQ=b^gEY);U=mBXkm>]I!&LW$-x^?}4Q}+ =8<<X#no7:rdLcOos2o4vO' );
define( 'LOGGED_IN_SALT',   '0!O/nI|PjkB.h7tUQTaR^?+^_;8OiN{v[Pw3vTgC++OHe>CB<qCJi8L6#|7*QVX*' );
define( 'NONCE_SALT',       'X{8Z1>t_]VWSi@&j3Y6 0^3}tD4xa2ikCnZA3Sbh9$ {?K-%[ieL0M2~zzH9`rEL' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
