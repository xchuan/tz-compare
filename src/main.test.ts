// main.test.ts
import { tzCompare, tzCompareTime, compareLocal } from '../lib/index'
import {junctionFormat} from '../lib/format'

test('check tzCompare with local time zone in en-US', () => {
  expect(tzCompare("Shanghai")).toContain("8 hours behind of");
  expect(tzCompare("Beijing")).toContain("8 hours behind of");
  expect(tzCompare("Alaska")).toContain("hours ahead of");
  expect(tzCompare("Funafuti")).toContain("hours behind of");

  expect(tzCompare("Lome")).toContain("is the same as");
});

test('check tzCompare with local time zone in zh-CN', () => {
  expect(tzCompare("Shanghai","zh-CN")).toContain("时间相比 慢");
  expect(tzCompare("Beijing","zh-CN")).toContain("时间相比 慢");
  expect(tzCompare("Alaska","zh-CN")).toContain("时间相比 快");
  expect(tzCompare("Funafuti","zh-CN")).toContain("时间相比 慢");
});

test('check tzCompareTime with Istanbul time zone in en-US', () => {
  expect(tzCompareTime('October 13, 2024 / 7:33 PM EDT','Istanbul')).toContain("hours ahead of");
  expect(tzCompareTime('October 13, 2024 / 7:33 PM EDT','Istanbul')).toContain("2024 at 2:33:00 AM GMT+3");

  expect(tzCompareTime('October 13, 2024 / 7:33 PM EDT','Chihuahua')).toContain("2 hours behind of");
  expect(tzCompareTime('October 13, 2024 / 7:33 PM EDT','New York')).toContain("is the same as");

  expect(tzCompareTime("October 13, 2024 / 7:33 PM EDT","")).toContain("October 13, 2024 / 7:33 PM EDT");

  expect(tzCompareTime("","")).toContain("");
});

test('check junctionFormat miss param', () => {
  expect(junctionFormat('strings')).toBe("strings");

  expect(junctionFormat('strings',[])).toBe("strings");
  expect(junctionFormat('strings {0},{1},{2}',[1,2,3])).toBe("strings 1,2,3");

  expect(junctionFormat('strings','11')).toBe("strings");
  
});

test('check compareLocal logic', () => {
  expect(compareLocal("October 13, 2024 / 7:33 PM EDT")).toContain("0 | UTC");

  expect(compareLocal("")).toContain("UTC");
});
