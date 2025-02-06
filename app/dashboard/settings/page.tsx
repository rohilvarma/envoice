import Title from "@/components/Title"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { SETTINGS_PAGE_CONTENT } from "@/lib/constants"

const SettingsPage = () => {
  return <div className="">
    <Title title={SETTINGS_PAGE_CONTENT.TITLE} />
    <p className="text-muted-foreground">
      {SETTINGS_PAGE_CONTENT.DESCRIPTION}
    </p>
    <Separator className="my-4" />
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">
          {SETTINGS_PAGE_CONTENT.COMPANY_INFO_FORM.TITLE}
        </CardTitle>
        <CardDescription>
          {SETTINGS_PAGE_CONTENT.COMPANY_INFO_FORM.DESCRIPTION}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action="" className="flex flex-col gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="companyName" className="font-bold">
              { SETTINGS_PAGE_CONTENT.COMPANY_INFO_FORM.NAME}
            </Label>
            <Input id="companyName" placeholder="Name of your company" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="companyName" className="font-bold">
              { SETTINGS_PAGE_CONTENT.COMPANY_INFO_FORM.ADDRESS}
            </Label>
            <Input id="companyName" placeholder="Name of your company" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="companyName" className="font-bold">
              { SETTINGS_PAGE_CONTENT.COMPANY_INFO_FORM.GST_NO}
            </Label>
            <Input id="companyName" placeholder="Name of your company" />
          </div>
          <Button className="w-fit">
            {SETTINGS_PAGE_CONTENT.SAVE}
          </Button>
        </form>
      </CardContent>
    </Card>
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="text-xl text-red-600">
          {SETTINGS_PAGE_CONTENT.DELETE_ACCOUNT_TITLE}
        </CardTitle>
        <CardDescription>
          {SETTINGS_PAGE_CONTENT.DELETE_ACCOUNT_DESCRIPTION}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="destructive" className="w-fit">
          {SETTINGS_PAGE_CONTENT.DELETE}
        </Button>
      </CardContent>
    </Card>
  </div>
}

export default SettingsPage