import { Link } from "react-router-dom"
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import '@/global.css'
import PageHeader from "./pageHeader"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Carousel1 from "@/assets/img/carousel1.jpg"

export function Home() {
  return (

    <div className="flex min-h-screen w-full flex-col">
      <PageHeader />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Carousel 
        opts={{
          align: "start",
          loop: true,
        }}
      >
          <CarouselContent className="-ml-2 md:-ml-4">
            <CarouselItem className="pl-2 md:pl-4" >
              <img src={Carousel1} />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">
              <img src={Carousel1} />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">
              <img src={Carousel1} />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </main>
    </div >
  )
}
