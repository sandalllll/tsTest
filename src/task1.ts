function formatInput(v: number): string;
function formatInput(v: string): string;
function formatInput(v: Date): string;

function formatInput(v: number|string|Date): string
{
    if (v instanceof Date)
    {
        return v.toISOString();
    }
    else
    {
        switch (typeof v)
        {
            case "string":
                return v.trim();
            case "number":
                const s = v.toString();
                const i = s.indexOf(".")
                return s.slice(0, i + 3)
            default:
                const neveroddoreven: never = v;
				return "";
        }
    }
}

console.log("input: \"" +             "new Date(1995, 11, 17, 3, 24, 0)" + "\"");
console.log("output: \"" + formatInput(new Date(1995, 11, 17, 3, 24, 0)) + "\"");
console.log("input: \"" +             '" hello! "' + "\"");
console.log("output: \"" + formatInput(" hello! ") + "\"");
console.log("input: \"" +             "17.1541" + "\"");
console.log("output: \"" + formatInput(17.1541) + "\"");