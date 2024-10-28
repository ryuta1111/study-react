import classes from "@/components/Links/Links.module.css"

export const Links = (props) => {
    return (
        <div className={classes.grid}
        //  className="flex gap-4 items-center flex-col sm:flex-row"
        >
            {props.items.map((item) => {
                return (
                    <div key={item.href}>
                        <a  href={item.href} className={item.class}>
                            <h3 className={classes.title}>🔸{item.title}</h3>
                        </a>
                        {/* <image className={item.image}/> */}
                    </div>
                );
            })}
        </div>
    );
}
