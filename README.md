# Datetime compare by location

![NPM Downloads](https://img.shields.io/npm/dm/tz-compare)
![License: MIT](https://img.shields.io/badge/license-MIT-blue?style=flat)

Quickly compare the current time with the time of a specified city and display the timezone difference, city name need be in english, and localization support english, chinese, spanish and français.

## Features

- ⚡️ Fast date calculations using native `Date` objects
- 🫰🏻 Timezone compare with support for daylight saving time
- 🌏 Support 200+ cities.

## How to use

**1. Install `tz-compare`.**

```shell
npm i tz-compare
```

**2. Usage.**

Show time zone difference with local.

```ts
import { tzCompare } from "tz-compare";

const al = tzCompare("Alaska");
const sz = tzCompare("Shenzhen"); // returns Local time is the same as Shenzhen, [Now time]

const ff = tzCompare("Funafuti"); // returns Local time is 4 hours behind of Funafuti, [Local time], [Funafuti time]

const ff_french = tzCompare("Funafuti","fr-FR");
```

Support four lanuage localization, english, chinese, spanish and français;

| Locale Abbreviation |
| ----------- |
|en-US|
|zh-CN|
|fr-FR|
|es-ES|


**3. Comparison at a specific time and location.**

```ts
import { tzCompareTime } from "tz-compare";

tzCompareTime("October 13, 2024 / 7:33 PM EDT","Istanbul");
tzCompareTime('October 13, 2024 / 7:33 PM EDT','Shanghai','zh-CN'); //returns Shanghai 时间与 October 13, 2024 / 7:33 PM EDT时间相比 快12小时, October 14, 2024 at 7:33:00 AM GMT+8

```

## License

MIT

