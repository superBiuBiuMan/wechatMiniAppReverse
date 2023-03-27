import os
inp=input("输入wxapkg文件的位置：（不包括wxapkg文件本身）")
wxid=inp.split("\\")[-2]
temp_out_file="out.wxapkg"
FIRST="1.first\\pc_wxapkg_decrypt.exe -wxid {0} -in \"{1}\\__APP__.wxapkg\" -out {2}"
SECOND="2.second\\nodejs\\node 2.second\\nodejs\\wuWxapkg.js {0}"
os.system(FIRST.format(wxid,inp,temp_out_file))
os.system(SECOND.format(temp_out_file))