import React, { useState } from "react";
import { Tabs } from "antd";
import TabsContent from "./TabsContent";
import style from "../style/tabsContent.module.css";

export default function TabsSection() {
  const [data, setData] = useState([
    {
      tab: "Destinations for arts & culture",
      tabData: [
        {
          col: 1,
          colData: [
            { title: "London", description: "United Kingdom" },
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
          ],
        },
        {
          col: 2,
          colData: [
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
          ],
        },
        {
          col: 3,
          colData: [
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
          ],
        },
        {
          col: 4,
          colData: [
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
          ],
        },
      ],
    },
    {
      tab: "Destinations for outdoor adventure",
      tabData: [
        {
          col: 1,
          colData: [
            { title: "Moscow", description: "Russia" },
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
          ],
        },
        {
          col: 2,
          colData: [
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
          ],
        },
        {
          col: 3,
          colData: [
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
          ],
        },
        {
          col: 4,
          colData: [
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
          ],
        },
      ],
    },
    {
      tab: "Mountain cabins",
      tabData: [
        {
          col: 1,
          colData: [
            { title: "Tokyo", description: "Japan" },
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
          ],
        },
        {
          col: 2,
          colData: [
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
          ],
        },
        {
          col: 3,
          colData: [
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
          ],
        },
        {
          col: 4,
          colData: [
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
          ],
        },
      ],
    },
    {
      tab: "Beach destinations",
      tabData: [
        {
          col: 1,
          colData: [
            { title: "Toronto", description: "Ontario" },
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
          ],
        },
        {
          col: 2,
          colData: [
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
          ],
        },
        {
          col: 3,
          colData: [
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
          ],
        },
        {
          col: 4,
          colData: [
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
          ],
        },
      ],
    },
    {
      tab: "Popular destinations",
      tabData: [
        {
          col: 1,
          colData: [
            { title: "Paris", description: "France" },
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
          ],
        },
        {
          col: 2,
          colData: [
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
          ],
        },
        {
          col: 3,
          colData: [
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
          ],
        },
        {
          col: 4,
          colData: [
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
            { title: "Los Angeles", description: "Hollywood" },
          ],
        },
      ],
    },
  ]);
  const { TabPane } = Tabs;
  return (
    <div className={style.TabsSection}>
      <h1>Inspiration for future getaways</h1>
      <Tabs defaultActiveKey="1">
        {data.map((item, i) => (
          <TabPane tab={item.tab} key={i + 1}>
            <TabsContent data={item.tabData} />
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}
