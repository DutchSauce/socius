export default function Text(props){
    const {children} = props;
    return (<span {...props}>{children}</span>)
}