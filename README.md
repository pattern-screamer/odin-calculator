# Odin Project Calculator

I'll be using this README as a way to gather my thoughts as I develop this app.

I want people to be able to mix multiple operators in a single calculation. When the display, for example, contains the string "6+(34/7)-5", then I might want to replace all instances of operators and syntax with letters, like "6arp34d7lpm5" where "rp" for example means "right parenthesis" and "d" means "division". I can then apply regex to this string to detect what operations need to be done to which operands, and then let some other piece of code handle the order of operations.

I might then also want to split my javascript into multiple files. Maybe one file to handle DOM-manipulation and another file to handle the actual calculations.

More questions: How would I best use the principle of objects that were taught in the previous lesson? How would I best use higher-order functions? What should the layout of the calculator be like?

I think this is going to be a fun project :)