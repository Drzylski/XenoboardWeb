
export default interface ITopicData {
    id?: string;
    userId?: string;
    title: string;
    body: string;
    category: string;
    tags: string[];
    files: object[];
    name: "TopicData";
}