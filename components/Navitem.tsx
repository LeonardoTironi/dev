export interface navItemInterface {
    url: string;
    label: string;
}
export default function Navitem(props: navItemInterface){
    return(
        <a href={props.url} className="px-4 rounded-md font-medium text-gray-700 ">
              {props.label}
        </a>
    )

}